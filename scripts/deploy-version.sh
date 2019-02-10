#! /usr/bin/env bash

set -e

if [ -z "$1" ]; then
  echo "Usage: yarn deploy-config <stage>"
  exit 1
fi


# BUCKET_NAME=alice-portfolio-webapp-$1
BUCKET_NAME=henry-lambda-at-edge-test

echo "Deploying config to bucket: $BUCKET_NAME"

cp public/version.json build/version.json


echo "Deploying Setting version.json Cache-Control -> no-cache"
aws s3 cp --cache-control "no-cache, no-store, must-revalidate" --content-encoding gzip build/version.json s3://$BUCKET_NAME/version.json --metadata-directive REPLACE