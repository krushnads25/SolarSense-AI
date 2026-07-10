FROM n8nio/n8n:1.99.1

USER root

COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

ENV N8N_USER_FOLDER=/data/.n8n

ENTRYPOINT ["/docker-entrypoint.sh"]