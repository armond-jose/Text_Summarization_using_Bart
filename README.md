# 📚 Text Summarization using BART

This project demonstrates a full-stack text summarization app powered by a fine-tuned Facebook BART model. It summarizes long-form inputs into concise and coherent summaries.

---

## 🌐 Live Demo (Frontend)

✅ Deployed on Vercel:  
🔗 https://text-summarization-using-bart.vercel.app/

---

<details>
  <summary>⚙️ <strong>How to Run the Backend Locally</strong> (Click to expand)</summary>

  ### ⚠️ Backend (Not Publicly Hosted)

  Due to the large model size (~1.5GB), the backend cannot be hosted freely online. You need to run it locally by following these steps:

  #### 🔁 Step-by-step Guide:

  1. 🧬 Clone the repository:
     ```bash
     git clone https://github.com/armond-jose/Text_Summarization_using_Bart.git
     cd Text_Summarization_using_Bart/backend
     ```

  2. 🧪 Create and activate a virtual environment:
     ```bash
     python -m venv .venv
     # Windows:
     .venv\Scripts\activate
     # macOS/Linux:
     source .venv/bin/activate
     ```

  3. 📦 Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```

  4. 🚀 Run the FastAPI server:
     ```bash
     uvicorn main:app --host 0.0.0.0 --port 8000
     ```

     ⚡ The first time you run it, the BART model (~1.5GB) will automatically download and extract.

  5. 🌍 Optional: Make it public using ngrok:
     ```bash
     ngrok http 8000
     ```
     🔗 Then copy the generated public URL (e.g. `https://abcd1234.ngrok-free.app`) and update the frontend `BACKEND_URL` in `App.js`.

</details>

---

## 📁 Dataset and Model Download

📦 Download from Google Drive:  
https://drive.google.com/drive/folders/1iwcIrBVMn0EGqziYMjjdyGJPVeJU8nvq?usp=sharing

This folder contains:

- 🧠 Fine-tuned BART model (`bart_model/`)
- 📊 Training dataset (Multi-News)

---

## 🧠 Model Fine-Tuning Details

- ✅ Base Model: [`facebook/bart-large-cnn`](https://huggingface.co/facebook/bart-large-cnn)
- 🧾 Dataset: [Multi-News on Hugging Face](https://huggingface.co/datasets/multi_news)
- 🛠️ Fine-tuning was performed using Hugging Face's Transformers library for summarization:
  - Trained to summarize multiple related news articles into a single coherent summary.
  - Training included dynamic max length, beam search, and content compression optimization.

---

## 🖼️ Screenshots

📷 Screenshots of the working web app:

- ![Output 1](screenshots/Screenshot%202025-06-21%20112027.png)
- ![Output 2](screenshots/Screenshot%202025-06-21%20112515.png)
- ![Output 3](screenshots/Screenshot%202025-06-21%20110602.png)

---

## 📦 Tech Stack

- 🤖 Model: Facebook BART fine-tuned on Multi-News
- 🔁 Backend: FastAPI + Transformers + PyTorch
- 🌐 Frontend: React + Axios + Material UI
- 🧪 Deployment: Vercel (Frontend), Localhost/ngrok (Backend)

