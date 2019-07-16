import React from 'react';
import styled from 'styled-components'
import Paper from './Paper';
import Entry from './Entry';
import data from './data.json';

const Container = styled(Paper)`
    display: flex;
    align-items: center;
    height: 56px;
    margin-bottom: ${props => props.theme.spacingMedium};
`;

const Team = styled.div`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center';
    margin-left: ${props => props.theme.spacingMedium};
    margin-right: ${props => props.theme.spacingMedium};
    background: ${props => props.theme.colors[props.color]};;
    color: #fff;
    height: ${props => props.theme.spacingLarge};
    width: ${props => props.theme.spacingLarge};
`;

const Name = styled.div`
    flex: 1;
`;

const PlayerCard = props => {
    const { name, teamId } = props;
    const teamInfo = data.teams.find(team => team.id === teamId)

    return (
        <Container>
            <Team color={teamInfo.color}>
                {teamInfo.number}
            </Team>
            <Name>
                {name}
            </Name>
            <Entry></Entry>
            <Entry>1</Entry>
            <Entry>1</Entry>
            <Entry>1</Entry>
            <Entry>1</Entry>
            <Entry>1</Entry>
            <Entry>1</Entry>
            <Entry>1</Entry>
            <Entry>1</Entry>
            <Entry>1</Entry>
        </Container>
    );
}

export default PlayerCard;