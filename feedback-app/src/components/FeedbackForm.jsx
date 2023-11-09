import { useState } from 'react';
import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
  const [text, setText] = useState('');
  const handleTextChange = (eventParam) => {
    setText(eventParam.target.value);
  };

  return (
    <Card>
      <form>
        <h2>"Please rate your experience with us."</h2>
        {/*@todo-Rating Select Component */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Share your thoughts with a review."
            value={text}
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
