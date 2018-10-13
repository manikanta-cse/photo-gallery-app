FROM node:6.10.1
WORKDIR /usr/src/
COPY package*.json ./
RUN npm install && cd public/lib; npm install 
RUN npm install -g gulp
COPY . .
EXPOSE 8090
CMD [ "npm", "start" ]