FROM node:18-alpine

WORKDIR /app

COPY ../../package*.json ./

RUN npm install

COPY ../../ .

RUN npm run build

EXPOSE 3000

# انتخاب حالت اجرا بر اساس NODE_ENV
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then npm run start:prod; else npm run start:dev; fi"]
