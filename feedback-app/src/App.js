//components are either classes or functions
function App() {
  let title = 'Blog Post';
  let body = 'This is my blog post';
  let comments = [
    { id: 1, text: 'comment 1' },
    { id: 2, text: 'comment 2' },
    { id: 3, text: 'comment 3' },
  ];

  let loading = false;
  let showComments = true;

  if (loading) return <h1>Loading...</h1>;

  let commentBlock = (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((item, index) => (
          <li key={index}>{item.text}</li> //make sure to add a key when creating a list using map to the child element
        ))}
      </ul>
    </div>
  );

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>
      {showComments && commentBlock}
    </div>
  );
}

export default App;
//line 29 instead of null we can do this..
// {showComments && (
//   <div className="comments">
//     <h3>Comments ({comments.length})</h3>
//     <ul>
//       {comments.map((item, index) => (
//         <li key={index}>{item.text}</li> //make sure to add a key when creating a list using map to the child element
//       ))}
//     </ul>
//   </div>
// ) : null}
