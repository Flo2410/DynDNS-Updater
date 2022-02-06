FROM node:alpine

LABEL org.opencontainers.image.source https://github.com/Flo2410/DynDNS-Updater

WORKDIR /app

COPY ./ /app

RUN npm install

CMD ["npm", "start"]