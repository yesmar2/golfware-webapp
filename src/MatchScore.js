import React from 'react';
import styled from 'styled-components';
import Paper from './Paper';
import ListItem from './ui/ListItem';
import ListItemIcon from './ui/ListItemIcon';
import ListItemText from './ui/ListItemText';
import TeamLogo from './TeamLogo';

const Container = styled(Paper)`
    width: 100%;
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
            <ListItem>
                <ListItemIcon>
                    <TeamLogo color={teamOneColor} />
                </ListItemIcon>
                <ListItemText
                    primaryText={`Team ${teamOneNumber}`}
                    secondaryText={teamOnePlace}
                />
                <Points>{teamOnePoints}</Points>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <TeamLogo color={teamTwoColor} />
                </ListItemIcon>
                <ListItemText
                    primaryText={`Team ${teamTwoNumber}`}
                    secondaryText={teamTwoPlace}
                />
                <Points>{teamTwoPoints}</Points>
            </ListItem>
        </Container>
    );
}

export default MatchScore;