
const axios = require('axios');

async function deleteReview(reviewId) {
  try {
    const response = await axios.delete(`http://example.com/api/reviews/${reviewId}`);
    console.log(response.data);
  } catch (error) {
    console.error('Error deleting review:', error);
  }
}

deleteReview('1'); // Use a valid review ID
