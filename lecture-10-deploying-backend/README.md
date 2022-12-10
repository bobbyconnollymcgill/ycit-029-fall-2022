docker build -t taco .

docker run -p 8089:3006 taco

gcloud auth login

gcloud auth configure-docker

gcloud auth activate-service-account --key-file=account.json

gcloud services enable containerregistry.googleapis.com

docker image tag taco:latest ycit029/taco:latest

gcloud builds submit --tag gcr.io/ycit029/taco:latest --project ycit029

Other commands, might be useful:

Set which project
gcloud config set project ycit029

Set which account (use one that ends with gserviceaccount.com)
gcloud config set account 96897154251-compute@developer.gserviceaccount.com
