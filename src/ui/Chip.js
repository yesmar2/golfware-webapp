import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: inline-flex;
    align-items: center;
    height: 24px;
    padding-left: ${(props) => props.theme.spacingMedium};
    padding-right: ${(props) => props.theme.spacingMedium};
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
`;

const Chip = (props) => {
    const {
        className, text,
    } = props;
    return (
        <Container className={className}>
            {text}
        </Container>
    );
};

export default Chip;
