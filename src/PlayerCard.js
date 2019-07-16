import React from 'react';
import styled from 'styled-components'
import data from './data.json';

const Container = styled.div`
    display: flex;
    border: 1px solid ${props => props.theme.colors.grey[200]};
    padding: ${props => props.theme.spacingMedium};
    margin-bottom: ${props => props.theme.spacingMedium};
    background: #fff;
    border-radius: 7px;
`;

const Team = styled.div`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center';
    margin-right: ${props => props.theme.spacingMedium};
    background: ${props => props.theme.colors[props.color]};;
    color: #fff;
    height: ${props => props.theme.spacingLarge};
    width: ${props => props.theme.spacingLarge};
`;

const Name = styled.div`
    
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
        </Container>
    );
}

export default PlayerCard;