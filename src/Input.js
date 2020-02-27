import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const LeftIcon = styled.div`
    margin-right: ${(props) => props.theme.spacingMedium};
`;

const StyledInput = styled.input`
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    font-size: inherit;
    text-align: inherit;
    font-family: inherit;
    background: transparent;
`;

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = { value: '' };

        this.inputRef = React.createRef();
    }

    componentDidUpdate(prevProps) {
        const { focus } = this.props;
        if (focus && prevProps.focus !== focus) {
            this.inputRef.current.focus();
        }
    }

    onChange = (event) => {
        const { onChange } = this.props;
        this.setState({ value: event.target.value });
        onChange(event.target.value);
    };

    render() {
        const {
            className,
            maxLength,
            placeholder,
            leftIcon,
        } = this.props;

        const { value } = this.state;

        return (
            <Container className={className}>
                {leftIcon && <LeftIcon>{leftIcon}</LeftIcon>}
                <StyledInput
                    ref={this.inputRef}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    onChange={this.onChange}
                    value={value}
                />
            </Container>
        );
    }
}

export default Input;
