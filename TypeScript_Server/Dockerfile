FROM node:20-alpine3.20

# Set the working directory
WORKDIR /app

COPY package*.json .
COPY tsconfig.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

EXPOSE 8000

CMD ["npm","start"]