FROM node:20

RUN npm install -g @angular/cli

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
