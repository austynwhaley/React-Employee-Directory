import React from 'react';
import './style.css';

function Container(props) {
  return <div className="contain-style">{props.children}</div>;
}

export default Container;