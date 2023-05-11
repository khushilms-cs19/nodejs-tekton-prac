FROM node:12.16-alpine

ADD ../package.json      /app/
ADD ../index.js          /app/
ADD ../package-lock.json /app/

RUN cd /app && npm install

EXPOSE  8080

CMD ["node", "/app/bin/www"]