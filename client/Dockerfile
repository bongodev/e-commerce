# Use an official Node.js runtime as a base image
FROM node:20.17.0-alpine AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React application
RUN npm run build

# Use Nginx to serve the built application
FROM nginx:stable-alpine

# Copy the build folder to the Nginx HTML folder
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the port Nginx will run on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
