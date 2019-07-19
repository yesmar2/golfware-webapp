import React, { Component } from 'react';
import styled from 'styled-components';
import PlayerCard from './PlayerCard';
import Search from './Search';
import data from './data.json';

const Container = styled.div`
    
`;

const Players = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${props => props.theme.spacingMedium};
`;

const Heading = styled.h3`
    line-height: 18px;
    font-size: 18px;
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
        return (
            <Container>
                <Heading>Quick Entry</Heading>
                <Search onChange={this.onChange} />
                <Players>
                    {this.state.players.map(player => (
                            <PlayerCard 
                                key={player.id}
                                name={player.name}
                                teamId={player.teamId} />
                        )
                    )}
                </Players>
            </Container>
        );
    }
}

export default QuickEntry;
