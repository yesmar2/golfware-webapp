import React from 'react';
import styled from 'styled-components';
import { GolfBall } from './icons';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    background-color: ${props => props.theme.colors[props.color]};
    border-radius: 50%;
`; 

const TeamLogo = ({ color }) => {
    return (
        <Container color={color}>
            <GolfBall />
        </Container>
    );
}

export default TeamLogo;