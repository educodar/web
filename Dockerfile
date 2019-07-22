FROM node:alpine as node-alpine-build

# Creating app directory and settings as working directory
# Using -p because mkdir isn't recursive by default
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Configuring Node modules path...
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Setting Node loglevel...
ENV NPM_CONFIG_LOGLEVEL warn