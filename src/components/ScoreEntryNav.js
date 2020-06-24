import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../images/golfware-logo-white.svg';

const Container = styled.header`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const Heading = styled.h2`
    font-size: 18px;
    font-weight: normal;
    flex: 1;
    color: ${(props) => props.theme.palette.grey[100]};
`;

const LogoContainer = styled(Link)`
    position: absolute;
    width: 54px;
    left: -72px;
    border-right: 1px solid rgba(256, 256, 256, 0.7);
`;

const LogoStyled = styled(Logo)`
    height: 36px;
    width:  36px;
`;

const ScoreEntryNav = () => (
    <Container>
        <LogoContainer to="/">
            <LogoStyled />
        </LogoContainer>
        <Heading>Bemus Point Monday Night Men&apos;s League</Heading>
    </Container>
);

export default ScoreEntryNav;
