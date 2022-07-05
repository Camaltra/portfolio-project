FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

USER node

EXPOSE 8000

CMD ["npm", "run", "start" ]
