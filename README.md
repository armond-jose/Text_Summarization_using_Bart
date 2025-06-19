📝 BART Text Summarization App
A full-stack AI-powered text summarization tool using a fine-tuned BART model for generating concise summaries from long text.

✨ Features
✅ AI-Powered Summarization – Converts lengthy text into short, meaningful summaries.
✅ Fine-Tuned BART Model – Optimized on the Multi-News dataset for high-quality results.
✅ React Frontend – Modern, responsive UI for seamless user experience.
✅ FastAPI Backend – Efficient inference using Hugging Face Transformers.
✅ Deployed on Vercel – Frontend is live for testing.

🚀 Live Demo
🔗 Frontend (Hosted on Vercel):
👉 https://text-summarization-using-bart-r7g9.vercel.app/

⚠️ Backend (Not Publicly Hosted):
Due to the large model size (~1.5GB), the backend must be run locally. Follow the setup guide below.

🤖 Model Training Details
📂 Dataset Used
Multi-News Dataset (Hugging Face Link)

Contains news summaries and source articles for training.

🛠️ Training Process
Fine-Tuned BART using Hugging Face transformers.

Training script: train/train.ipynb.

Exported model weights to backend/bart_model/.

Inference handled via transformers.pipeline("summarization").

📁 Project Structure
text
Text_Summarization_using_Bart/
├── train/            # Training scripts & configs
├── dataset/          # Dataset loading scripts
├── backend/          # FastAPI server & BART model
│   ├── bart_model/   # Fine-tuned model weights
│   └── main.py       # FastAPI inference server
└── frontend/         # React app
🛠️ Local Setup Guide
📥 Clone the Repository
bash
git clone https://github.com/armond-jose/Text_Summarization_using_Bart.git
cd Text_Summarization_using_Bart
💻 Backend Setup (FastAPI + BART Model)
1. Navigate to the Backend
bash
cd backend
2. (Optional) Create a Virtual Environment
bash
# Windows
python -m venv venv
.\venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
3. Install Dependencies
bash
pip install -r requirements.txt
4. Download & Place Model Weights
Download Model: Google Drive Link (Replace with actual link)

Place model.safetensors inside backend/bart_model/.

5. Run FastAPI Server
bash
uvicorn main:app --host 0.0.0.0 --port 8000
🔗 API Endpoint: http://localhost:8000/summarize