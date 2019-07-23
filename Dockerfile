FROM node:alpine as build

ENV \
    GATSBY_TELEMETRY_DEBUG=0 \
    # Setting opt-in to Gatsby telemetry
    GATSBY_TELEMETRY_DISABLED=0 \
    # Setting Node environment...
    NODE_ENV=development \
    # Setting Node loglevel...
    NPM_CONFIG_LOGLEVEL=warn \
    # Setting Node modules path...
    PATH=/usr/src/app/node_modules/.bin:$PATH

# Creating app directory
RUN \
    mkdir -p /usr/src/app && \
    mkdir -p /usr/src/app/node_modules && \
    chown -R node:node /usr/src/app

# Setting as working directory
# Using -p because mkdir isn't recursive by default
WORKDIR /usr/src/app

# Copy app package manifest...
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source files and set app directory permissions
COPY --chown=node:node . .

# Set user to node
USER node

# Port :8000 will be published on runtime
EXPOSE 8000

# Starting app...
CMD ["npm","start"]