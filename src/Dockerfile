FROM node:20-alpine

WORKDIR /app

COPY doSomething.js .
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]
#CMD ["node", "doSomething.js"]