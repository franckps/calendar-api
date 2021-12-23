FROM node:16.11.0-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "run start:dev"]