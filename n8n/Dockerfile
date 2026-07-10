FROM n8nio/n8n:1.99.1

USER root

ENTRYPOINT ["sh", "-c", "mkdir -p /data/.n8n && chown -R node:node /data && exec su-exec node n8n"]

ENV N8N_USER_FOLDER=/data/.n8n