FROM alpine:3.7

RUN apk --update add --no-cache nodejs && rm -rf /var/cache/apk/* 

COPY ./ /src

WORKDIR src/

RUN npm install && cd public/lib; npm install

RUN npm install --global gulp-cli && npm link gulp

EXPOSE 8090

CMD [ "npm", "start" ]
