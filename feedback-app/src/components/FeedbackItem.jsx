import { FaTimes } from 'react-icons/fa';
import React from 'react';
import Card from './shared/Card'; // ignore this is correct

//HANDLEDELETE IS CATCHED AND THEN LATER CALLED ON THE ONCLICK
function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
