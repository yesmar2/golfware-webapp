import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 1200px;
    height: 100%;
    margin: 0 auto;
`;

const MiddleSection = (props) => {
    const { children } = props;
    return <Container>{children}</Container>;
};

export default MiddleSection;
