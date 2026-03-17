FROM node:24.13.1-alpine AS build

WORKDIR /workspace

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build


FROM nginx:stable-alpine3.23

WORKDIR /usr/share/nginx/html

COPY --from=build /workspace/dist/ .