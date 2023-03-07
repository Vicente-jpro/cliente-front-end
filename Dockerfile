# Step 1 
FROM node:16
LABEL AUTHOR="Vicente Simão"
WORKDIR /code
RUN npm install -g @angular/cli

# Step 2
COPY package*.json ./
RUN npm install