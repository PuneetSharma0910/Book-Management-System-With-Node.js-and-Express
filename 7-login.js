
const axios = require('axios');

async function loginUser(credentials) {
  try {
    const response = await axios.post('http://example.com/api/users/login', credentials);
    console.log(response.data);
  } catch (error) {
    console.error('Error logging in user:', error);
  }
}

loginUser({ username: 'newuser', password: 'password123' });
