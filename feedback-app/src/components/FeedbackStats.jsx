import React from 'react';

function FeedbackStats({ feedback }) {
  let totalRating = feedback.reduce((acc, curr) => acc + curr.rating, 0);
  let avgRating = totalRating / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {avgRating}</h4>
    </div>
  );
}

export default FeedbackStats;