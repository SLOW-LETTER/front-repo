FROM node:14-alpine

WORKDIR /usr/src/next

COPY *.* /usr/src/next

RUN npm install

COPY . /usr/src/next

RUN npm run build

EXPOSE 3000

CMD [ "npm" , "run" , "start"]