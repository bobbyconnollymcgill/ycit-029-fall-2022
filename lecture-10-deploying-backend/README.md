docker build -t taco .

docker run -p 3000:3000 taco

gcloud auth login

gcloud auth configure-docker

gcloud auth activate-service-account --key-file=account.json

gcloud services enable containerregistry.googleapis.com

docker image tag taco:latest <proj_name>/taco:latest

gcloud builds submit --tag gcr.io/<proj_name>/taco:latest --project taco
