# Dev
# Use NodeMon for reset server in any change
FROM node:12-alpine AS development

# RUN apk --no-cache add --virtual native-deps \
#  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git 
# && \
# npm install --quiet node-gyp -g

RUN npm install -g nodemon --quiet --no-optional

RUN mkdir /srv/src && chown node:node /srv/src

USER node

WORKDIR /srv/src

COPY --chown=node:node package*.json ./

RUN npm install --quiet --no-optional


# CMD [ "npm", "start" ]