FROM node:lts-alpine

WORKDIR /app

RUN apk --no-cache add git

COPY package*.json ./

RUN npm install --only=production

COPY . .

USER root

EXPOSE 8000

CMD ["npm", "run", "start" ]
