#! /usr/bin/env bash

set -e

if [ -z "$1" ]; then
  echo "Usage: yarn deploy <stage>"
  exit 1
fi

BUCKET_NAME=alice-portfolio-webapp-$1

echo "Deploying to bucket: $BUCKET_NAME"

if [[ -z "$SKIP_BUILD" ]]; then
  echo "Building the app..."
  rm -rf ./build/*
  yarn build
fi

which aws 1>/dev/null 2>&1

if [ $? -ne 0 ]; then
  echo "Install the AWS CLI: http://docs.aws.amazon.com/cli/latest/userguide/installing.html"
  exit 1
fi

GZIP_TYPES=( "js" "css" "html" "json" "ico" "eot" "otf" "ttf" "svg" )
OTHER_TYPES=( "woff" "woff2" "png" )

for type in "${GZIP_TYPES[@]}"
do
    find ./build -name "*.${type}" -print0 | xargs -0 -I file ./scripts/gzip-compress.sh file
    aws s3 cp --exclude "*" --include "*.${type}" --exclude "static/*" --recursive ./build "s3://${BUCKET_NAME}" \
      --content-encoding gzip
    aws s3 cp --exclude "*" --include "static/*.${type}" --recursive ./build "s3://${BUCKET_NAME}" \
      --content-encoding gzip --cache-control "public, max-age=86400"
    # files with hash have 30 day cache
    aws s3 cp --exclude "*" --include "static/*.????????.${type}" --include "static/*.????????.chunk.${type}" \
      --recursive "s3://${BUCKET_NAME}" "s3://${BUCKET_NAME}" --content-encoding gzip \
      --cache-control "public, max-age=2592000" --metadata-directive REPLACE
done

for type in "${OTHER_TYPES[@]}"
do
    aws s3 cp --exclude "*" --include "*.${type}" --exclude "static/*" --recursive ./build "s3://${BUCKET_NAME}"
    aws s3 cp --exclude "*" --include "static/*.${type}" --recursive ./build "s3://${BUCKET_NAME}" \
      --cache-control "public, max-age=86400"
    # files with hash have 30 day cache
    aws s3 cp --exclude "*" --include "static/*.????????.${type}" --include "static/*.????????.chunk.${type}" \
      --recursive "s3://${BUCKET_NAME}" "s3://${BUCKET_NAME}" \
      --cache-control "public, max-age=2592000" --metadata-directive REPLACE
done

echo "Ensuring bucket is synced"
aws s3 sync ./build "s3://${BUCKET_NAME}" --delete

echo "Setting index.html Cache-Control -> no-cache"
aws s3 cp --cache-control "no-cache, no-store, must-revalidate" --content-encoding gzip s3://$BUCKET_NAME/index.html s3://$BUCKET_NAME/index.html --metadata-directive REPLACE