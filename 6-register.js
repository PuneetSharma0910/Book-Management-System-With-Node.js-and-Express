
const axios = require('axios');

async function registerUser(userData) {
  try {
    const response = await axios.post('http://example.com/api/users/register', userData);
    console.log(response.data);
  } catch (error) {
    console.error('Error registering user:', error);
  }
}

registerUser({ username: 'newuser', password: 'password123' });
