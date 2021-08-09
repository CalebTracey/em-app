
# # Stage 0, "build-stage", based on Node.js, to build and compile the frontend
# FROM tiangolo/node-frontend:10 as build-stage
# WORKDIR /app
# COPY package*.json /app/
# RUN yarn install
# COPY ./ /app/
# RUN yarn run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx

# FROM nginx:1.15
# COPY --from=build-stage /app/build/ /usr/share/nginx/html
# # Copy the default nginx.conf provided by tiangolo/node-frontend
# COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
# CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/nginx.conf > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
# EXPOSE ${PORT}

# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:10

# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /usr/src/app

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

# Installs all node packages
RUN yarn install

# Copies everything over to Docker environment
COPY . .

# Uses port which is used by the actual application
EXPOSE $PORT

# Finally runs the application
CMD [ "yarn", "start" ]