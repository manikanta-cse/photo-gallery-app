FROM alpine:3.7

RUN apk --update add --no-cache nodejs=6.10.1 && rm -rf /var/cache/apk/* 

COPY ./ /src

WORKDIR src/

RUN npm install --global gulp-cli

RUN npm install && cd public/lib; npm install

EXPOSE 8090

CMD [ "npm", "start" ]
