# Stage 1
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
