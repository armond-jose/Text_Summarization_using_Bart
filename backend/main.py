from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import BartForConditionalGeneration, BartTokenizer
import torch

app = FastAPI()

# Enable CORS (React frontend will run on a different port)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can specify ["http://localhost:3000"] if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model
# Load tokenizer and model
model_path = "./bart_model"
tokenizer = BartTokenizer.from_pretrained(model_path)
model = BartForConditionalGeneration.from_pretrained(model_path, torch_dtype=torch.float32, use_safetensors=True)


class TextRequest(BaseModel):
    text: str

@app.post("/summarize")
def summarize_text(request: TextRequest):
    inputs = tokenizer([request.text], return_tensors='pt', max_length=1024, truncation=True)
    summary_ids = model.generate(inputs['input_ids'], num_beams=4, max_length=130, early_stopping=True)
    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    return {"summary": summary}
