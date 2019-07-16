import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.input`
    display: flex;
    border: 1px solid ${props => props.theme.colors.grey[200]};
    padding: ${props => props.theme.spacingMedium};
    margin-bottom: ${props => props.theme.spacingMedium};
    outline: none;
    border-radius: 4px;
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
                placeholder="Search..."
                onChange={this.onChange} />
        );
    }
}

export default Input;