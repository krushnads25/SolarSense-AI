#!/bin/sh

mkdir -p /data/.n8n
chown -R node:node /data

exec su node -c "n8n start"