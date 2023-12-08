FROM node:16

WORKDIR /app

ARG APP_BACKEND_PORT
ARG APP_BACKEND_URL
ARG APP_FRONTEND_INNER_URL
ARG APP_FRONTEND_PORT

ARG DATABASE_URL

ENV APP_BACKEND_PORT="${APP_BACKEND_PORT}"
ENV APP_BACKEND_URL="${APP_BACKEND_URL}"
ENV APP_FRONTEND_INNER_URL="${APP_FRONTEND_INNER_URL}"
ENV APP_FRONTEND_PORT="${APP_FRONTEND_PORT}"

ENV DATABASE_URL="${DATABASE_URL}"

COPY package*.json .

RUN npm install

COPY . .

CMD cd /app && npm run dev