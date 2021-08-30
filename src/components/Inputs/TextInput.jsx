import React from 'react';
import { InputLabel } from '../../styles/typography/inputs.styles';
import { Text } from './Inputs.styles';

const TextInput = (props) => {
    return (
        <InputLabel>{props.label}
            <Text onChange={props.onInputChange} type="text" placeholder={props.placeholder}>
            </Text>
        </InputLabel>
    );
};

export default TextInput;
