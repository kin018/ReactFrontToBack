import {} from 'react-icons/fa';
import React from 'react';
import Card from './shared/Card'; // ignore this is correct

function FeedbackItem({ item }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
