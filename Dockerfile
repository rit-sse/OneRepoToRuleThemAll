FROM node:10 as builder

WORKDIR /app

# Install dependencies
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm ci

# API_ROOT `--build-arg=api_root=http://localhost:3000/api/v2`
ARG api_root
ENV API_ROOT $api_root

# Build the app
COPY ./ /app
RUN npm run build

FROM alpine:3.14.1
WORKDIR /app/dist
# Install and config nginx
RUN adduser -u 1000 -D -S -G www-data www-data
RUN apk add nginx
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

COPY --from=builder /app/dist /app/dist

# Run nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
