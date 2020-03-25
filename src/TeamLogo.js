import React from 'react';
import styled from 'styled-components';
import { GolfBall } from './icons';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    position: relative;
`;

const GolfBallStyled = styled(GolfBall)`
    fill: ${(props) => props.theme.palette[props.color]};
    height: 36px;
    width: 24px;
`;

const TeamNumber = styled.div`
    position: absolute;
    top: 7px;
    color: #fff;
`;

const TeamLogo = ({ color, teamNumber }) => (
    <Container>
        <TeamNumber>{teamNumber}</TeamNumber>
        <GolfBallStyled color={color} />
    </Container>
);

export default TeamLogo;
