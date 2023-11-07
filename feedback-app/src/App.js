import { useState } from 'react';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
//state is simply just data
//component level state--data assocaited to that one component and app level state--used in multiple components

function App() {
  const [feedback, setFeedback] = useState();
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
