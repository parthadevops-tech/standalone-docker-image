FROM node:18.19.0 AS builder


WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install


COPY . .


RUN npm run build --prod


#FROM nginx:1.19-alpine
FROM nginx:alpine as production-stage

RUN rm -rf /usr/share/nginx/html/*


COPY --from=builder /usr/src/app/dist/standalone-component15/browser /usr/share/nginx/html


COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
