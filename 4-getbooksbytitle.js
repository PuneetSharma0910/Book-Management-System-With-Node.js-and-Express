const axios = require('axios');

async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`http://example.com/api/books?title=${title}`);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching books by title:', error);
  }
}

getBooksByTitle('The Great Book');
