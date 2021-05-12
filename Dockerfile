FROM node:alpine

RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./

CMD ["yarn", "install"] 

COPY . .

EXPOSE 3000
