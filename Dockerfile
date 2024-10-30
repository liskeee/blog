FROM node:lts AS base
WORKDIR /app
COPY package.json yarn.lock ./

FROM base AS prod-deps
RUN yarn install --omit=dev

FROM base AS build-deps
RUN yarn install

FROM build-deps AS build
COPY . .
RUN yarn build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
