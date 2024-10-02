
const axios = require('axios');

function searchByISBN(isbn) {
  return axios.get(`http://example.com/api/books/${isbn}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error searching by ISBN:', error);
      throw error;
    });
}

searchByISBN('1234567890').then(book => console.log(book));
