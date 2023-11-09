import React from 'react';
import Card from './shared/Card';

function FeedbackForm() {
  return (
    <Card>
      <form>
        <h2>"Please rate your experience with us."</h2>
        {/*@todo-Rating Select Component */}
        <div className="input-group">
          <input type="text" placeholder="Share your thoughts with a review." />
          <button type="submit">Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
