import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    font-size: 16px;
`;

const LeftIcon = styled.div`
    margin-right: ${props => props.theme.spacingMedium};
`;

const StyledInput = styled.input`
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    font-size: inherit;
    text-align: inherit;
    background: transparent;
`;

class Input extends Component {
    state = {
        value: ''
    }

    onChange = (event) => {
        this.setState({value: event.target.value});
        this.props.onChange(event.target.value);
    }

    render() {
        const {
            className,
            maxLength,
            placeholder,
            leftIcon
         } = this.props;

         const { value } = this.state;

        return (
            <Container className={className}>
                {leftIcon && (
                    <LeftIcon>
                        {leftIcon}
                    </LeftIcon>
                )}
                <StyledInput 
                    placeholder={placeholder}
                    maxLength={maxLength}
                    onChange={this.onChange}
                    value={value} />
            </Container>
            
        );
    }
}

export default Input;