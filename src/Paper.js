import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid ${props => props.theme.colors.grey[200]};
    background: #fff;
    border-radius: 7px;
`;

const Paper = props => {
    const { children, className } = props;

    return (
        <Container className={className}>
            {children}
        </Container>
    );
}

export default Paper;