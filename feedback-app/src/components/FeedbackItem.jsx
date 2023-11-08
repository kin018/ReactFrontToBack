import { FaTimes } from 'react-icons/fa';
import React from 'react';
import Card from './shared/Card'; // ignore this is correct

function FeedbackItem({ item }) {
  const handleClick = () => {
    console.log(item.id);
  };

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={handleClick} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
