# 1️⃣ Use official Node image to build the app
FROM node:18 AS builder

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the source code
COPY . .

# Build the React app for production
RUN npm run build

# 2️⃣ Use Nginx to serve the built app
FROM nginx:alpine

# Copy build output from previous stage to Nginx HTML folder
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 (default for nginx)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

