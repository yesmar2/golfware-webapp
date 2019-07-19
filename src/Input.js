import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.input`
    outline: none;
    border: none;
    width: 100%;
`;

class Input extends Component {

    onChange = (event) => {
        this.props.onChange(event.target.value);
    }

    render() {
        const {
            className,
            maxLength,
            placeholder
         } = this.props;

        return (
            <Container 
                placeholder={placeholder}
                className={className}
                maxLength={maxLength}
                onChange={this.onChange} />
        );
    }
}

export default Input;