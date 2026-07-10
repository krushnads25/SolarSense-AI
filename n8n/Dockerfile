FROM n8nio/n8n:1.99.1

USER root

RUN mkdir -p /data/.n8n && \
    chown -R node:node /data

USER node

ENV N8N_USER_FOLDER=/data/.n8n