# I could have a yml file for this Dockerfile for an execution and after this one is executed 
#  main.yml for the main action is executed
FROM node:20-alpine

WORKDIR /app

COPY doSomething.js .
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]
#CMD ["node", "doSomething.js"]