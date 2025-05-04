const axios = require('axios');
const { expect } = require('chai');

const BASE_URL = 'http://localhost:3000';
const HEADERS = {
  Authorization: 'Bearer my-secret-token'
};

describe('Mock API Server Tests', () => {
  it('GET /users should return an array', async () => {
    const response = await axios.get(`${BASE_URL}/users`, { headers: HEADERS });
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('array');
  });

  it('POST /users should create a new user', async () => {
    const newUser = {
      name: 'Test User',
      email: 'testuser@example.com'
    };
    const response = await axios.post(`${BASE_URL}/users`, newUser, { headers: HEADERS });
    expect(response.status).to.equal(201);
    expect(response.data.name).to.equal('Test User');
  });

  it('PUT /users/1 should update the user', async () => {
    const updated = {
      name: 'Updated User',
      email: 'updated@example.com'
    };
    const response = await axios.put(`${BASE_URL}/users/1`, updated, { headers: HEADERS });
    expect(response.status).to.equal(200);
    expect(response.data.name).to.equal('Updated User');
  });

  it('DELETE /users/1 should remove the user', async () => {
    const response = await axios.delete(`${BASE_URL}/users/1`, { headers: HEADERS });
    expect(response.status).to.equal(200);
  });
});
