# Use the official Bun image as the base image
FROM oven/bun:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package files first to install dependencies
COPY bun.lockb package.json ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the app's source code
COPY . .

# Build the application
RUN bun run build

# Expose the port the app runs on
EXPOSE 3000

# Run the Bun command to start the app
CMD ["bun", "run", "start"]
