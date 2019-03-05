#! /usr/bin/env bash

set -e


BUCKET_PATH=alice-portfolio-website-prod
# BUCKET_NAME=henry-lambda-at-edge-test
# VERSION=$(node -e "console.log(require('./package.json').version)")
# BUCKET_PATH=$BUCKET_NAME/$VERSION

echo "Deploying config to bucket: $BUCKET_NAME"

cp public/env.js build/env.js

./scripts/gzip-compress.sh build/env.js

echo "Deploying Setting env.js Cache-Control -> no-cache"
aws s3 cp --cache-control "no-cache, no-store, must-revalidate" --content-encoding gzip build/env.js s3://$BUCKET_PATH/env.js --metadata-directive REPLACE