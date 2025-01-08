FROM node:22.3

WORKDIR /appdocker

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run" ,"start" ]