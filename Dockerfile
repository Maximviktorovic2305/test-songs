FROM node:20 as build   

WORKDIR /usr/src/app   

COPY package.json ./   /usr/src/app/   

RUN yarn   

COPY . .   /usr/src/app/   

RUN yarn build   

FROM nginx:stable-alpine   

COPY --from=build /usr/src/app/build /usr/share/nginx/html   

COPY nginx.conf /etc/nginx/conf.d/default.conf   

CMD [ "nginx", "-g", "daemon off" ]