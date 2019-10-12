import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    font-size: 16px;
    //border-bottom: 1px solid ${props => props.theme.colors.grey[300]};
`;

const LeftIcon = styled.div`
    margin-right: ${props => props.theme.spacingMedium};
`;

const StyledInput = styled.input`
    outline: none;
    border: none;
    width: 100%;
    font-size: 16px;
    background: transparent;
`;

class Input extends Component {

    onChange = (event) => {
        this.props.onChange(event.target.value);
    }

    render() {
        const {
            className,
            maxLength,
            placeholder,
            leftIcon
         } = this.props;

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
                    onChange={this.onChange} />
            </Container>
            
        );
    }
}

export default Input;