import React from 'react';
import DropDownStyle from '../../styles/FormStyles';

const renderSelectOptions = (element) => (
    <option key={element.value} value={element.value}>
        {element.text}
    </option>
);

class DropDownComponent extends React.Component {
    render() {
        const {input, id, name, text, displayElements, width, required, meta: { touched, error, warning } } = this.props;
        return (
            <span>
                <DropDownStyle.Label htmlFor={id}>{text}{required && <span>*</span>}</DropDownStyle.Label>
                <div>
                    <DropDownStyle.Select newwidth={width}
                        {...input}
                        id={id}
                        name={name}
                    >
                        {displayElements.map(renderSelectOptions)}
                    </DropDownStyle.Select>
                    {touched &&
                    ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
                </div>
        </span>
        );
      }
}

export default DropDownComponent;