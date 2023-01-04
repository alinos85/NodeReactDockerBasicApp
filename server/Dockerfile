FROM node
WORKDIR /NodeReactProject/server
COPY package*.json ./
RUN npm install
EXPOSE 4000

## THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

## Launch the wait tool and then your application
CMD /wait

CMD ["npm", "run", "dev"]