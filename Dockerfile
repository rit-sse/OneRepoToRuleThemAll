FROM node:7.4

# Caddy Server
ADD https://caddyserver.com/download/build?os=linux&arch=amd64&features=cors /tmp
RUN tar -xvf /tmp/build -C /usr/bin/

# Node deps
WORKDIR /app
COPY ./package.json /app/package.json
RUN npm install
COPY ./  /app
RUN npm run lint
RUN npm run build

# Clean extra stuff away
RUN find . -maxdepth 1 \! \( -name dist \) -exec rm -rf '{}' \;

# Caddy
EXPOSE 80
EXPOSE 443
COPY ./caddy /app

CMD caddy
