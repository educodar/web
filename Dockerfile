FROM node:alpine as node-alpine-build

# Creating app directory and settings as working directory
# Using -p because mkdir isn't recursive by default
RUN mkdir -p /usr/src/app