FROM node:lts-alpine

WORKDIR /app

# Install dependencies first (layer caching)
COPY package*.json ./
RUN npm install --omit=dev

# Copy source
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
