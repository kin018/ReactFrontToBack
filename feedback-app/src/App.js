import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'; //Two types are browser router and hash router but browser is most common

function App() {
  //[NAMEOFSTATE, FUNCTION]
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (
      window.confirm(
        'Warning: This action will delete the feedback. Are you certain you want to proceed?'
      )
    ) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  };

  const addFeedback = (
    newFeedback
  ) /* remember newFeedback is a param this could very well be called jawn or anything else */ => {
    newFeedback.id = uuidv4(); //added an id to newFeedback object of the uuid
    setFeedback([newFeedback, ...feedback]); //calls setFeedBack useState but we call the arr adding the new feedback to the to the front exisiting feedback arr which are objs(... is a spread operator)
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Route exact path="/">
          <FeedbackForm handleAdd={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </Route>

        <Route path="/about" component={AboutPage} />
        {/* <Route path='/about'>This is the about route</Route> One way to do it  */}
      </div>
    </Router>
  );
}

export default App;
