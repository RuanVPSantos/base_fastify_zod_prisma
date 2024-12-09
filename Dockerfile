# Use the official Node.js image
FROM node:18

# Define the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml to install dependencies
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install the project dependencies
RUN pnpm install

# Generate Prisma Client
RUN pnpm prisma generate

# Copy the rest of the project files
COPY . .

# Build the project (optional if using TypeScript, e.g., pnpm run build)
RUN pnpm run build

# Expose the port your application will run on
EXPOSE 3000

# Start the application
CMD ["pnpm", "run", "dev"]
