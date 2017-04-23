FROM node:7.4

# Caddy Server
RUN curl https://getcaddy.com | bash

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
