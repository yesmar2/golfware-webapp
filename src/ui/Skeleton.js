import React from 'react';
import styled, { keyframes } from 'styled-components';

const wave = keyframes`
    0% {
        transform: translateX(-100%);
    }
    60% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(100%);
    }
`;


const Container = styled.div`
    overflow: hidden;
    position: relative;
    background: rgba(0, 0, 0, 0.04);
    border-radius: 7px;
    
    &::after {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        z-index: 1;
        position: absolute;
        animation: ${wave} 1.6s linear 0.5s infinite;
        transform: translateX(-100%);
        background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.04), transparent);
    }
`;

const Skeleton = (props) => {
    const { className } = props;
    return <Container className={className} />;
};

export default Skeleton;
