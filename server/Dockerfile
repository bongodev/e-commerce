# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.17.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Set NODE_ENV to development
ENV NODE_ENV=development

# Expose the application port
EXPOSE 5000

# Run the application
CMD ["npm", "run", "dev"]
