FROM node
WORKDIR /souk
COPY package.json yarn.lock ./
ENV PATH="./node_modules/.bin:$PATH"
COPY . ./
RUN yarn install --ignore-engines --unsafe-perm

CMD ["yarn", "start"]