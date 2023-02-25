FROM node:16.19-alpine3.17
WORKDIR /app
COPY . .
RUN npm install
#RUN npm ci --only=production
EXPOSE 3000
CMD ["npm", "start"]