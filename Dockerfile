FROM node:10.21.0-jessie
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["./wait-for-it.sh" , "tracking-server:9411" , "--strict" , "--timeout=360" , "--" , "npm", "run", "start-server"]