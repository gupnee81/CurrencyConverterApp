import React from 'react';
import {Field} from 'redux-form';
import DropDownComponent from './DropDownComponent';

const CurrencyComponent = ({id, name, text, displayElements, width, required }) => (
    <Field
        id={id}
        name={name}
        text={text}
        displayElements={displayElements}
        component={DropDownComponent}
        width={width}
        required={required}
    />
);

export default CurrencyComponent;