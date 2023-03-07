FROM node:16

WORKDIR /src

COPY package*.json ./
COPY tsconfig*.json ./

EXPOSE 4000

RUN npm i

COPY . .

RUN npm run build

RUN apt-get update && apt-get install -y wget