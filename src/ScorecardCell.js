import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 64px;
    text-align: center;
`;

const ScorecardCell = props => {
    const {
        children,
        className
    } = props;

    return (
        <Container className={className}>
            {children}
        </Container>
    );
}

export default ScorecardCell;