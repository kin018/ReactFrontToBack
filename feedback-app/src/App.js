import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
//state is simply just data
//component level state--data assocaited to that one component and app level state--used in multiple components

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem></FeedbackItem>
      </div>
    </>
  );
}

export default App;
