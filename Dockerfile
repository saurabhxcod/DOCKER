# Base Image
FROM node:20-alpine3.18

# Set the working directory
WORKDIR /app

# Copy dependency definitions
# COPY package.json .
# COPY package-lock.json .
COPY package*.json .

# Install dependencies
RUN npm install

# Copy application code
COPY . .

#Expose the application port
# EXPOSE 3000 8000 3001 
EXPOSE 3000-3005


# Start the application
CMD ["npm", "start"]
