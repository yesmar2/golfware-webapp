import React from 'react';
import styled from 'styled-components'
import Paper from './Paper';
import TeamLogo from './TeamLogo';

const Container = styled(Paper)`
    width: 100%;
    padding: ${props => props.theme.spacingMedium};
`;

const Team = styled.div`
    display: flex;
    align-items: center;

    :first-child {
        margin-bottom: ${props => props.theme.spacingMedium};
    }
`;

const TeamNameContainer = styled.div`
    margin-left: ${props => props.theme.spacingSmall};
`;

const TeamName = styled.div`
    font-weight: 500;
    margin-bottom: ${props => props.theme.spacingTiny};
`;

const Standing = styled.div`
    font-size: 12px;
    color: ${props => props.theme.colors.grey[300]};
`;

const Points = styled.div`
    flex: 1;
    text-align: right;
    font-weight: 500;
    font-size: 24px;
`;

const MatchScore = props => {
    const {
        className,
        teamOneNumber,
        teamOneColor,
        teamOnePlace,
        teamOnePoints,
        teamTwoNumber,
        teamTwoColor,
        teamTwoPlace,
        teamTwoPoints
    } = props;

    return (
        <Container className={className}>
            <Team>
                <TeamLogo color={teamOneColor} />
                <TeamNameContainer>
                    <TeamName>Team {teamOneNumber}</TeamName>
                    <Standing>{teamOnePlace}</Standing>
                </TeamNameContainer>
                <Points>{teamOnePoints}</Points>
            </Team>
            <Team>
                <TeamLogo color={teamTwoColor} />
                <TeamNameContainer>
                    <TeamName>Team {teamTwoNumber}</TeamName>
                    <Standing>{teamTwoPlace}</Standing>
                </TeamNameContainer>
                <Points>{teamTwoPoints}</Points>
            </Team>
        </Container>
    );
}

export default MatchScore;