FROM node:alpine as build
ENV NODE_ENV production

# Configuring Node modules path...
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Setting Node loglevel...
ENV NPM_CONFIG_LOGLEVEL warn

# Creating app directory
RUN mkdir -p /usr/src/app

# Setting as working directory
# Using -p because mkdir isn't recursive by default
WORKDIR /usr/src/app

# Copy app package manifest...
COPY package.json /usr/src/app/package.json

# Copy app dependencies cache...
COPY package-lock.json /usr/src/app/package-lock.json

# Bundle app source files...
COPY / /usr/src/app

# Install dependencies
RUN npm install --silent && mv node_modules ../

COPY . .

# Exposing :8000 port
EXPOSE 8000

# Starting app...
CMD npm start