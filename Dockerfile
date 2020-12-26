FROM node:15-alpine3.12
LABEL "author"="az6bcn@gmail.com"
# Working directory
WORKDIR /app
# Install angular cli
RUN npm install -g @angular/cli
# Port to expose internally on the container
EXPOSE 4200

#  Webpack uses port 49153 to do live reload of the application
#  You have to expose and bind that port in the container to the host port.
EXPOSE 49153
# Copy package.json
COPY . .
# Install dependencies
RUN npm install
# start the application
CMD npm run dockerstart
