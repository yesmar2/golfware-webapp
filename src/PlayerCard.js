import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    border: 1px solid ${props => props.theme.borderColor};
    padding: ${props => props.theme.spacingMedium};
    margin-bottom: ${props => props.theme.spacingMedium};
`;

const Team = styled.div`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center';
    margin-right: ${props => props.theme.spacingSmall};
    background: #ddd;
    color: #fff;
    height: ${props => props.theme.spacingLarge};
    width: ${props => props.theme.spacingLarge};
`;

const Name = styled.div`
    
`;


const PlayerCard = props => {
    const { name, team } = props;

    return (
        <Container>
            <Team>
                {team}
            </Team>
            <Name>
                {name}
            </Name>
        </Container>
    );
}

export default PlayerCard;