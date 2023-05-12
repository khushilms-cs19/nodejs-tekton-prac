FROM node:12.16-alpine

COPY package.json      /app/
COPY index.js          /app/
COPY package-lock.json /app/

RUN cd /app && npm install

EXPOSE  8080

CMD ["node", "/app/index.js"]