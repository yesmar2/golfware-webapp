import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './Input';
import PlayerCard from './PlayerCard';
import data from './data.json';

const Container = styled.div`
    
`;

const Players = styled.div`
    
`;

const Search = styled(Input)`
    width: 100%;
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
                                teamId={player.teamId} />
                        )
                    )}
                </Players>
            </Container>
        );
    }
}

export default QuickEntry;
