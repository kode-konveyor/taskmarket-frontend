FROM node:13.12.0-alpine AS builder

WORKDIR /app
COPY . .
RUN rm -rf /app/node_modules/
RUN npm install
RUN npm run build


FROM node:13.12.0-alpine 

RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
COPY tools ./tools

CMD /app/tools/run.sh