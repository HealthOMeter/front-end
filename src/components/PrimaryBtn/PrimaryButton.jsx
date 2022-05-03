import React from 'react';
import { PrimaryBtn } from './PrimaryButton.styles';

const PrimaryButton = (props) => {
  return (
    <PrimaryBtn
      wide={props.wide}
      className="primary-btn"
      onClick={props.event}
      disabled={props.disabled}
    >
      {props.children}
    </PrimaryBtn>
  )
};

export default PrimaryButton;
