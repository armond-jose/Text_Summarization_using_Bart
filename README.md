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
     🔗 Then copy the generated public URL (e.g. `https://abcd1234.ngrok-free.app`) and update the frontend `BACKEND_URL` accordingly in `App.js`.

</details>

---

## 📁 Dataset and Model Download

You can access the fine-tuned model and training dataset via this Google Drive folder:

📦 [Download Model & Dataset (Google Drive)](https://drive.google.com/drive/folders/1iwcIrBVMn0EGqziYMjjdyGJPVeJU8nvq?usp=sharing)

---

## 🧠 Model Fine-Tuning

The model used in this project is a fine-tuned version of Facebook’s `facebook/bart-large-cnn`.

- 🧾 Dataset: [Multi-News Dataset on Hugging Face](https://huggingface.co/datasets/multi_news)
- 🔧 Fine-Tuning: The model was trained on the Multi-News dataset, which contains multiple news articles grouped by topic. It was fine-tuned using the Transformers library from Hugging Face with a summarization objective.

---

## 🖼️ Screenshots

> Add screenshots here to showcase the functionality and UI.

### 🖼️ Output Screenshots

- ![output 1](screenshots/Screenshot%202025-06-21%20112027.png)
- ![output 2](screenshots/Screenshot%202025-06-21%20112515.png)
- ![output 3](screenshots/Screenshot%202025-06-21%20110602.png)


> 📷 Place your screenshots in a folder called `screenshots/` inside the root of your repo.

---

Let me know if you'd like a collapsible section for fine-tuning details or to auto-toggle URLs in App.js for ngrok vs. localhost. I can help with both!
