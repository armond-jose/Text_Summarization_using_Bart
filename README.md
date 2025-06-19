## 🤖 Model Training

This app uses a fine-tuned BART model trained on the [Multi-News Dataset](https://huggingface.co/datasets/multi_news) from Hugging Face.

### 🛠️ How We Trained

- We used Hugging Face Transformers and Datasets library
- Fine-tuned the model using `train/train.ipynb` script
- Saved and exported the model into `backend/bart_model/`
- Used `transformers.pipeline("summarization")` for fast inference

### 📁 Included Files

- `train/`: Training script and configs
- `dataset/`: Contains dataset notes or scripts for loading from Hugging Face
- `backend/bart_model/`: Contains the fine-tuned BART weights

---

## 🚀 Deployment

Frontend is deployed on **Vercel**. Backend can be served using FastAPI and optionally hosted on:

- **Render**
- **Railway**
- **AWS/EC2**

Frontend consumes the backend API endpoint using `axios`.

## 📦 Download Model & Dataset

Due to GitHub’s file size limits, we are hosting large files on Google Drive.

👉 [Click here to access the model and dataset](https://drive.google.com/drive/folders/1aG61fL_-AeY02PezMnaRtLLiiDYM23wu?usp=sharing)

### Included:
- `model.safetensors`: Fine-tuned BART model
- `multi_news_*.csv`: Train, validation, test splits
- `train/`: Training scripts
