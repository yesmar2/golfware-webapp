import React from 'react';
import styled from 'styled-components';
import { GolfBall } from './icons';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    background-color: ${(props) => props.theme.palette[props.color]};
    border-radius: 50%;
`;

const TeamLogo = ({ color }) => (
    <Container color={color}>
        <GolfBall />
    </Container>
);

export default TeamLogo;
