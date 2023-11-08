import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No FeedBack</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} /> //item is the prop name and {item} comes from feeback.map item param
      ))}
    </div>
  );
}

export default FeedbackList;
