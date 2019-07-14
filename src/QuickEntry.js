import React, { Component } from 'react';
import styled from 'styled-components';
import Search from './Search';
import PlayerCard from './PlayerCard';
import data from './data.json';

const Container = styled.div`
    
`;

const Players = styled.div`
    
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
                <Search onChange={this.onChange} />
                <Players>
                    {this.state.players.map(player => (
                            <PlayerCard 
                                key={player.id}
                                name={player.name}
                                team={player.team} />
                        )
                    )}
                </Players>
            </Container>
        );
    }
}

export default QuickEntry;
