import React from 'react';
import { InputLabel } from '../../styles/typography/inputs.styles';
import { Text } from './Inputs.styles';

const PwdInput = (props) => {
    return (
        <InputLabel>{props.label}
            <Text type="password" placeholder={props.placeholder}>
            </Text>
        </InputLabel>
    );
};

export default PwdInput;