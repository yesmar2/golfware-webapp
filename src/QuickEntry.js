import React, { Component } from 'react';
import styled from 'styled-components';
import Search from './Search';
import SortDropdown from './SortDropdown';
import PlayerCard from './PlayerCard';
import data from './data.json';

const Container = styled.div`
    
`;

const SearchSortContainer = styled.div`
    display: flex;
`;

const SearchStyled = styled(Search)`
    flex: 1;
    margin-right: ${props => props.theme.spacingMedium};
`;

const PlayerCardStyled = styled(PlayerCard)`
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
                <SearchSortContainer>
                    <SearchStyled onChange={this.onChange} />
                    <SortDropdown />
                </SearchSortContainer>
                {players
                    .sort((a,b) => {
                        if(a.name < b.name) { return -1; }
                        if(a.name > b.name) { return 1; }
                        return 0;
                    })
                    .map(player => {
                    const team = data.teams.find(team => team.id === player.teamId);
                        return (
                            <PlayerCardStyled 
                                key={player.id}
                                name={player.name}
                                teamNumber={team.number}
                                teamColor={team.color}
                                handicap={player.handicap} />
                        );
                    }
                )}
            </Container>
        );
    }
}

export default QuickEntry;
