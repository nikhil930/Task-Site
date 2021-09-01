import React from 'react';

import classes from './Button.module.css';
 
const Button = (props) => {
  let Class=`${classes.button} ${props.className}`
  return (
    <button
      className={Class}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;