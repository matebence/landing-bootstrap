FROM node:10.21.0-jessie
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["./wait-for-it.sh" , "config-server:8888" , "--strict" , "--timeout=40" , "--" , "npm", "run", "start-server"]