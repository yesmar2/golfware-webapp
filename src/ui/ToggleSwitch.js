import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const ToggleLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 40px;
    height: 16px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
`;

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.grey[200]};
    transition: 0.4s;
    border-radius: 8px;

    ::before {
        position: absolute;
        content: '';
        height: 24px;
        width: 24px;
        bottom: -4px;
        background-color: #fff;
        transition: 0.4s;
        border-radius: 50%;
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
    }
`;

const Input = styled.input`
    :checked + ${Slider} {
        background-color: #97ecbd;
    }

    :focus + ${Slider} {
        box-shadow: 0 0 1px ${(props) => props.theme.colors.green};
    }

    :checked + ${Slider}::before {
        transform: translateX(16px);
        background-color: ${(props) => props.theme.colors.green};
    }
`;

const StyledLabel = styled.label`
    margin-left: ${(props) => props.theme.spacingSmall};
    font-size: 12px;
`;

class ToggleSwitch extends Component {
    state = {
        checked: true,
    };

    onChange = (event) => {
        this.setState({
            checked: event.target.checked,
        });
    };

    render() {
        const { checked } = this.state;
        const { label, className } = this.props;

        return (
            <Container className={className}>
                <ToggleLabel>
                    <Input type="checkbox" checked={checked} onChange={this.onChange} />
                    <Slider />
                </ToggleLabel>
                <StyledLabel>{label}</StyledLabel>
            </Container>
        );
    }
}

export default ToggleSwitch;
