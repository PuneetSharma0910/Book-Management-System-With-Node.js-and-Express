const axios = require('axios');

async function getAllBooks() {
  try {
    const response = await axios.get('http://example.com/api/books');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}

getAllBooks();