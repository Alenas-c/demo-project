# Simple ECR Test Project

This is a minimal Flask app to test Amazon ECR deployment using GitHub Actions.

## Running Locally

```sh
docker build -t my-flask-app .
docker run -p 5000:5000 my-flask-app
```

Then visit: http://localhost:5000

## Pushing to Amazon ECR
Just push to main, and GitHub Actions will handle everything.

---

### **🛠 How to Test This**
1. **Push this project to GitHub** in a new repository.
2. **Set up GitHub Secrets**:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_ACCOUNT_ID` (Your AWS ECR account ID)
   - `AWS_REGION` (e.g., `us-east-1`)
3. **Push to `main` branch** and watch the pipeline run.
4. Once completed, check your **Amazon ECR** console for the image.

---
