import React from 'react';
import { PrimaryBtn } from './PrimaryButton.styles';

const PrimaryButton = (props) => {
  return (
    <PrimaryBtn
      onClick={props.event}
      disabled={props.disabled}
    >
      {props.children}
    </PrimaryBtn>
  )
};

export default PrimaryButton;
