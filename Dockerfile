FROM node:18

WORKDIR /app
COPY . .

RUN yarn install
RUN /app/node_modules/typescript/bin/tsc --watch false

CMD node .