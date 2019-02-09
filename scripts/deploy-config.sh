#! /usr/bin/env bash

set -e

if [ -z "$1" ]; then
  echo "Usage: yarn deploy-config <stage>"
  exit 1
fi


BUCKET_NAME=alice-portfolio-webapp-$1

echo "Deploying config to bucket: $BUCKET_NAME"

cp public/env.js build/env.js

./scripts/gzip-compress.sh build/env.js

echo "Deploying Setting env.js Cache-Control -> no-cache"
aws s3 cp --cache-control "no-cache, no-store, must-revalidate" --content-encoding gzip build/env.js s3://$BUCKET_NAME/env.js --metadata-directive REPLACE