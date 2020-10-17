FROM node:12

# Create app directory
WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV PORT=8080

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .

# Build App
RUN npm run build

USER node
EXPOSE 8080
CMD [ "node", "./dist/index.js" ]
