import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    background: #fff;
    border-radius: 7px;
    box-shadow: 0 0 14px 0 rgba(53, 64, 82,.05);
`;

const Paper = props => {
    const {
        children,
        className,
        onClick 
    } = props;

    return (
        <Container
            className={className}
            onClick={onClick}>
            {children}
        </Container>
    );
}

export default Paper;