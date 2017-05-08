FROM node

# Install and config nginx
RUN apt-get update && apt-get install -y nginx
RUN rm /etc/nginx/sites-enabled/*
COPY ./nginx/ /etc/nginx/sites-enabled/

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

# Install node deps
WORKDIR /app
COPY ./package.json /app/package.json
RUN npm install --warn

# Build the app
COPY ./ /app
RUN npm run build

# Set perms for dist dir
RUN chmod 755 -R /app/dist

# Run nginx
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
