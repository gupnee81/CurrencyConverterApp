import React from 'react';
import {Field} from 'redux-form';
import RenderInput from './RenderInput';

const AmountComponent = ({id, name, text, maxLen, type, width, required}) => (
    <Field
        id={id}
        name={name}
        text={text}
        type={type}
        maxLength={maxLen}
        component={RenderInput}
        width={width}
        required={required}
    />
);

export default AmountComponent;