import React from 'react';

function Card({ children, reverse }) {
  //conditional class for dark card and white text.  Notice the syntax reverse class is only shown if reverse prop is true
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
}

export default Card;
