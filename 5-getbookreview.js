
const axios = require('axios');

async function getBookReview(bookId) {
  try {
    const response = await axios.get(`http://example.com/api/reviews/${bookId}`);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching book review:', error);
  }
}

getBookReview('1'); // Use a valid book ID
