const axios = require('axios');

async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`http://example.com/api/books/${isbn}`);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching book by ISBN:', error);
  }
}

getBookByISBN('1234567890');
