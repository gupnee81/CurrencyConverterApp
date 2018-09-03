import React from 'react';
import InputStyle from '../../styles/FormStyles';

class RenderInput extends React.Component {
    render() {
        const {input, id, name, text, type, maxLength, required, width, meta: { touched, error, warning } } = this.props;
        return (
            <span>
                <InputStyle.Label htmlFor={id}>{text} {required && <span>*</span>}</InputStyle.Label>
                <InputStyle.Input newwidth={width}
                    {...input}
                    id={id}
                    name={name}
                    placeholder={text}
                    maxLength={maxLength}
                    type={type} />
                {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </span>
        );
      }
}

export default RenderInput;