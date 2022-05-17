FROM node:16.13.2

RUN npm install -g npm@latest --loglevel=error
WORKDIR /usr/src/server

COPY package*.json ./

RUN npm install --loglevel=error

COPY . .

RUN http://18.208.217.71 SKIP_PREFLIGHT_CHECK=true npm run build --prefix client

RUN mv client/build build

RUN rm  -rf client/*

RUN mv build client/

EXPOSE 8080

CMD [ "npm", "start" ]