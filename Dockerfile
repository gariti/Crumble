FROM andreysenov/firebase-tools
WORKDIR /souk
COPY package.json yarn.lock ./
ENV PATH="./node_modules/.bin:$PATH"
COPY . ./
CMD ["yarn", "start"]