FROM node:10 as builder

WORKDIR /app

# Build the app
COPY ./ /app
COPY ./package.json /app/package.json

# API_ROOT `--build-arg=api_root=http://localhost:3000/api/v2`
ARG api_root
ENV API_ROOT $api_root

RUN rm -rf node_modules \
    && npm install --warn \
    && npm run build

# Set perms for dist dir
RUN chmod 755 -R /app/dist

FROM alpine:latest
WORKDIR /app/dist
# Install and config nginx
RUN addgroup -g 1000 -S www-data \
    && adduser -u 1000 -D -S -G www-data www-data
RUN apk add nginx
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

COPY --from=builder /app/dist /app/dist

# Run nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
