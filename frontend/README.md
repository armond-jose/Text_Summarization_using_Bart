readme_markdown = """\
# 🧠 BART Text Summarization App

A full-stack AI-powered web app that summarizes long texts into concise summaries using a fine-tuned BART model.  
Built with a React frontend and FastAPI backend, and trained on the Multi-News dataset.

---

## 🚀 Live Frontend

Access the live frontend here:  
👉 https://text-summarization-using-bart-r7g9.vercel.app/

📌 Note: The backend is not publicly deployed due to large model size (~1.5GB). Follow instructions below to run locally.

---

## 🤖 Model Training Overview

- Model: BART (from Hugging Face Transformers)
- Dataset: [Multi-News Dataset](https://huggingface.co/datasets/multi_news)
- Fine-tuned using: `train/train.ipynb`
- Output saved to: `backend/bart_model/`
- Inference via: `transformers.pipeline("summarization")`

---

## 🛠 Backend Setup (FastAPI)

### 1. Install dependencies

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or .\\venv\\Scripts\\activate on Windows
pip install -r requirements.txt
