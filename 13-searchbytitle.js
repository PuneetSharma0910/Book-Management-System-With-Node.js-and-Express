
const axios = require('axios');

async function searchByTitle(title) {
  try {
    const response = await axios.get(`http://example.com/api/books?title=${title}`);
    console.log(response.data);
  } catch (error) {
    console.error('Error searching by title:', error);
  }
}

searchByTitle('The Great Book');
