FROM node:6.10.1
WORKDIR /usr/src/
COPY package*.json ./
RUN npm install --global gulp-cli
RUN npm install && cd /lib; npm install
COPY . .
EXPOSE 8090
CMD [ "npm", "start" ]