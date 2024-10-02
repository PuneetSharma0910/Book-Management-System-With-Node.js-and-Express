
const axios = require('axios');

async function searchByAuthor(author) {
  try {
    const response = await axios.get(`http://example.com/api/books?author=${author}`);
    console.log(response.data);
  } catch (error) {
    console.error('Error searching by author:', error);
  }
}

searchByAuthor('John Doe');

