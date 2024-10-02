
const axios = require('axios');

async function addOrModifyReview(reviewData) {
  try {
    const response = await axios.post('http://example.com/api/reviews', reviewData);
    console.log(response.data);
  } catch (error) {
    console.error('Error adding/modifying review:', error);
  }
}

addOrModifyReview({ bookId: '1', userId: 'user1', review: 'Great book!', rating: 5 });

