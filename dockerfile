# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /home/index

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your application
CMD ["node", "index.js"]

