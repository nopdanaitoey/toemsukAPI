FROM node:lts-alpine

# เพิ่มการติดตั้ง TypeScript และ ts-node
RUN npm install -g typescript ts-node

WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 8080
RUN chown -R node /app
USER node
CMD ["npm", "start"]
