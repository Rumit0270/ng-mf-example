#!/bin/bash
# TODO: It would be efficient to use bash script to deploy the apps to AWS S3 bucket

echo "----- Deploying to AWS -----"


# Set the bucket name
BUCKET_NAME=$2

# Define the sub apps
SUB_APPS=("mfe1" "mfe2" "mfe3")

echo "Deploying shell"
# aws s3 sync ./dist/apps/shell s3://$BUCKET_NAME --acl public-read

# Copy the static assets for sub apps to s3 bucket
for sub_app in ${SUB_APPS[@]}; do
  echo "Deploying $sub_app"
  # echo ./dist/apps/$sub_app s3://$BUCKET_NAME/$sub_app --acl public-read
  aws s3 sync ./dist/apps/$sub_app s3://$BUCKET_NAME/$sub_app --acl public-read
done