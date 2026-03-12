FROM node:20 AS prepare

WORKDIR /task_tracker

COPY package*.json ./

RUN npm install 


FROM node:alpine

WORKDIR /task_tracker

COPY --from=prepare /task_tracker/node_modules ./node_modules 

CMD ["node", "server.js"]

