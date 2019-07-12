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
    render() {
        return (
            <Container>
                <Search />
                <Players>
                    {data.players.map(player => (
                            <PlayerCard 
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
