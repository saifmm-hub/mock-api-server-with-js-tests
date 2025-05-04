const fs = require('fs');
const { faker } = require('@faker-js/faker');

const generateUsers = () => {
  return Array.from({ length: 10 }, (_, id) => ({
    id: id + 1,
    name: faker.name.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
  }));
};

const data = {
  users: generateUsers(),
  posts: []
};

fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
