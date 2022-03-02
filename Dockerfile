# from node 16 alpine since its smaller
FROM node:16-alpine

# Go to this directory
WORKDIR /app

# Copy over the files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy over all the files from here to the working directory
COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]