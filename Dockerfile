# syntax=docker/dockerfile:1

# Stage 1: Base image.
## Start with a base image containing NodeJS so we can build Docusaurus.
FROM node:lts as base
## Disable colour output from yarn to make logs easier to read.
ENV FORCE_COLOR=0
## Enable corepack.
RUN corepack enable
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus

# Stage 2a: Development mode.
FROM base as dev
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus
## Expose the port that Docusaurus will run on.
EXPOSE 3000
## Run the development server.
CMD [ -d "node_modules" ] && npm run start --host 0.0.0.0 --poll 1000 || npm install && npm run start --host 0.0.0.0 --poll 1000

# Stage 2b: Production build mode.
FROM base as prod
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus
## Copy over the package.json and package-lock.json (if exists)
COPY package*.json ./
## Install dependencies with `--immutable` to ensure reproducibility.
RUN npm ci
## Copy over the rest of the source code.
COPY . .
## Build the static site.
RUN npm run build

# Stage 3: Serve with nodemon.
FROM prod as serve
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus
## Copy over the package.json and package-lock.json (if exists)
COPY package*.json ./
## Install dependencies with `--immutable` to ensure reproducibility.
RUN npm ci
## Copy over the rest of the source code.
COPY . .
## Build the static site.
RUN npm run build
## Expose the port that Docusaurus will run on.
EXPOSE 3000
## Add node_modules/.bin to PATH
ENV PATH="/opt/docusaurus/node_modules/.bin:${PATH}"
## Run the production server with nodemon for automatic rebuilding.
CMD ["nodemon", "--config", "nodemon.json"]

## Keep the container running indefinitely
# CMD ["tail", "-f", "/dev/null"]
# # Stage 3b: Serve with Caddy.
# FROM caddy:2-alpine as caddy
# ## Copy the Caddyfile.
# COPY --from=prod /opt/docusaurus/Caddyfile /etc/caddy/Caddyfile
# ## Copy the Docusaurus build output.