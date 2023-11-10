import { useState } from 'react';
import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (eventParam) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be longer than 10 characters');
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(eventParam.target.value);
  };

  const handleSubmit = (eventParam) => {
    eventParam.preventDefault(); //prevent default behavior which is submitting to actual file
    //if statement to make sure user cant manipulate devtools to get around error handling in handleTextChange
    if (text.trim().length > 10) {
      //constructing a new obj
      const newFeedback = {
        text: text, //comes from state which is connected to text field
        rating: rating,
      };
      handleAdd(newFeedback);
      setText(''); //clear text after submission
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>"Please rate your experience with us."</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Share your thoughts with a review."
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
