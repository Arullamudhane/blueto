# Stage 1: Build the React app
FROM node:14.9.0 AS build-step

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:stable-alpine

# Copy custom nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the build files from the previous stage
# COPY --from=build-step /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
