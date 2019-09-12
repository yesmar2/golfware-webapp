import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import PlayerCard from './PlayerCard';
import Search from './Search';
import data from './data.json';

const Container = styled.div`
    
`;

const Teams = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${props => props.theme.spacingMedium};
`;

const Team = styled.div`
   
`;

const Players = styled.div`
    display: flex;
    flex-direction: column;
`;

const PlayerCardStyled = styled(PlayerCard)`
    margin-bottom: ${props => props.theme.spacingMedium};
`;


const Heading = styled.h3`
    line-height: 18px;
    font-size: 18px;
    font-weight: normal;
    margin-bottom: ${props => props.theme.spacingMedium};
`;

const TeamHeading = styled.h4`
    line-height: 16px;
    font-size: 16px;
    font-weight: normal;
    margin-bottom: ${props => props.theme.spacingMedium};
`;

class QuickEntry extends Component {
    state = {
        players: data.players
    }

    onChange = value => {
        const filteredPlayers = data.players.filter(player => { 
            const name = player.name.toLowerCase();
            return name.indexOf(value.toLowerCase()) !== -1 ;
        })

        this.setState({ players: filteredPlayers })
    }

    render() {
        const { players } = this.state;

        return (
            <Container>
                <Heading>Quick Entry</Heading>
                <Search onChange={this.onChange} />
                <Teams>
                    {data.teams
                        .filter(team => players.some(player => player.teamId === team.id))
                        .map(team => (
                        <Team>
                            <TeamHeading>Team {team.id}</TeamHeading>
                            <Players>
                                {players
                                    .filter(player => player.teamId === team.id)
                                    .map(player => {
                                        return (
                                            <PlayerCardStyled 
                                                key={player.id}
                                                name={player.name}
                                                handicap={player.handicap} />
                                        );
                                    }
                                )}
                            </Players>
                        </Team>
                    ))}
                </Teams>
            </Container>
        );
    }
}

export default QuickEntry;
