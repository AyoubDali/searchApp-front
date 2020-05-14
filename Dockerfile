
# base image
FROM node:latest as node 

# set working directory
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/searchService-front /usr/share/nginx/html
