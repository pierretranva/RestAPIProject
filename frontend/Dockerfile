FROM node:16.13.1-alpine as runner

WORKDIR /opt/app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

# start
CMD ["npm", "start"]
