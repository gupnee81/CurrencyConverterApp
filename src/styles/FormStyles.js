import styled from 'styled-components';

const Label = styled.label`
    display: block;
    color: #423F3F;
    font-size: 16px;
    font-weight: bold;
`;

const Input = styled.input`
    height: 38px;
    width: ${props => (props.newwidth) ? `${props.newwidth}%` : '100%'};
    border-radius: 8px;
    border-radius: 4px;
    outline-style: none;
    border-style: solid;
    border-width: 1px;
    border-color: #ccc;
    padding: 1px 0 1px 8px;
    margin-top: 5px;
`;

const Select = styled.select`
    height: 38px;
    width: ${props => (props.newwidth) ? `${props.newwidth}%` : '100%'};
    border-radius: 8px;
    border-radius: 4px;
    outline-style: none;
    border-style: solid;
    border-width: 1px;
    border-color: #ccc;
    padding: 1px 0 1px 8px;
    margin-top: 5px;
`;

const Button = styled.button`
    background-color: #5CA3BB;
    border-radius: 24px;
    padding: 0 30px;
    height: 40px;
    color: #fff;
    text-transform: uppercase;
    border: 1px solid #5CA3BB;
    cursor: pointer;
    display: block;
    &:hover {
        border-color: #deb0b0;
    }

    &:disabled {
        cursor: default;
        background-color: grey;
        border-color: grey;
        opacity: .5;
    }
`;


export default {
    Label,
    Input,
    Select,
    Button,
}

