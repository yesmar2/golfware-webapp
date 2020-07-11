import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../images/golfware-logo-white.svg';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const LogoContainer = styled.div`
    position: absolute;
    width: 72px;
    left: -96px;
    border-right: 1px solid rgba(256, 256, 256, 0.7);
    transition: left 200ms, width 200ms;
`;

const LogoStyled = styled(Logo)`
    height: 48px;
    width:  48px;
    transition: height 200ms, width: 200ms;
`;

const Heading = styled.h1`
    font-size: 30px;
    font-weight: normal;
    color: ${(props) => props.theme.palette.grey[100]};
`;

const LeagueNav = ({ className }) => (
    <Container className={className}>
        <LogoContainer>
            <LogoStyled />
        </LogoContainer>
        <Heading>
            Golfware
        </Heading>
    </Container>
);

export default LeagueNav;
