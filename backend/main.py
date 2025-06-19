from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import BartForConditionalGeneration, BartTokenizer
import torch
import os
import gdown
import zipfile

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with specific frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 📥 Download and extract model from Google Drive at startup
model_dir = "bart_model"
zip_path = "bart_model.zip"

if not os.path.exists(model_dir):
    print("🔽 Downloading model zip from Google Drive...")
    file_id = "1BgDMueEruraCqlJAZs-trV24vX_YRuHL"
    url = f"https://drive.google.com/uc?id={file_id}"
    gdown.download(url, zip_path, quiet=False)

    print("📦 Extracting...")
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall()
    print("✅ Model downloaded and extracted!")

# ✅ Load model and tokenizer
tokenizer = BartTokenizer.from_pretrained(model_dir)
model = BartForConditionalGeneration.from_pretrained(model_dir, torch_dtype=torch.float32, use_safetensors=True)

class TextRequest(BaseModel):
    text: str

@app.post("/summarize")
def summarize_text(request: TextRequest):
    inputs = tokenizer([request.text], return_tensors='pt', max_length=1024, truncation=True)
    summary_ids = model.generate(inputs['input_ids'], num_beams=4, max_length=130, early_stopping=True)
    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    return {"summary": summary}
