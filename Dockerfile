FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG POCKETBASE_URL
ENV POCKETBASE_URL=$POCKETBASE_URL
# Change à chaque rebuild pour forcer un nouveau fetch PocketBase
ARG CACHEBUST=0
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
