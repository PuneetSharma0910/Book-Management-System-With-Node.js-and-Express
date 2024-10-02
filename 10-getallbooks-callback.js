
const axios = require('axios');

function getAllBooks(callback) {
  axios.get('http://example.com/api/books')
    .then(response => callback(null, response.data))
    .catch(error => callback(error));
}

getAllBooks((error, books) => {
  if (error) {
    console.error('Error fetching books:', error);
  } else {
    console.log(books);
  }
});
