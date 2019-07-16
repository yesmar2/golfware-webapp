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
        const { className } = this.props;

        return (
            <Container 
                className={className}
                onChange={this.onChange} />
        );
    }
}

export default Input;