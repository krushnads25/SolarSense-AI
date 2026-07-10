FROM n8nio/n8n:latest

USER root

RUN mkdir -p /data/.n8n && chown -R node:node /data

USER node