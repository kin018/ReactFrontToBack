import React from 'react';
function Card({ children, reverse }) {
  // //conditional class for dark card and white text.  Notice the syntax reverse class is only shown if reverse prop is true
  // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;

  //in contrast to above this is a conditional style
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000',
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = { reverse: false };
export default Card;
