FROM node
WORKDIR /NodeReactProject/server
COPY package*.json ./
RUN npm install
EXPOSE 4000

CMD ["npm", "run", "dev"]