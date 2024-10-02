const axios = require('axios');

async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`http://example.com/api/books?author=${author}`);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching books by author:', error);
  }
}

getBooksByAuthor('John Doe');
