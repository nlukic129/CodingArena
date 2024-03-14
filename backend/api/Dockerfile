FROM node:latest

RUN npm install -g nodemon ts-node

WORKDIR /api

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]


