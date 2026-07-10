FROM n8nio/n8n:1.99.1

USER root

ENV N8N_USER_FOLDER=/data/.n8n

CMD mkdir -p /data/.n8n && \
    chown -R node:node /data && \
    su node -c "n8n start"