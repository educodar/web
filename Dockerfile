FROM node:alpine as node-alpine-build

# Creating app directory and settings as working directory
# Using -p because mkdir isn't recursive by default
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Configuring Node modules path...
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Setting Node loglevel...
ENV NPM_CONFIG_LOGLEVEL warn

# Copy app package manifest...
COPY package.json /usr/src/app/package.json

# Copy app dependencies cache...
COPY package-lock.json /usr/src/app/package-lock.json

# Install dependencies for production
RUN npm install

# Bundle app source files...
COPY / /usr/src/app

# Exposing :8000 port
EXPOSE 8000

# Starting app...
CMD ["npm", "start"]