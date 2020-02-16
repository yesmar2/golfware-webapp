import React from 'react';
import { connect } from 'react-redux';
import { playerOperations, playerSelectors } from "../state/ducks/players";

import ScoreEntry from '../ScoreEntry';

class ScoreEntryContainer extends React.Component {
    componentDidMount() {
        this.props.fetchPlayers();
    }

    render() {
        const { players } = this.props;

        return (
            <ScoreEntry players={players} />
        );
    }
}

const mapDispatchToProps = {
    fetchPlayers: playerOperations.fetchPlayers
};

function mapStateToProps(appState) {
    return {
        //players: playerSelectors.getPlayers(appState),
        players: []
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreEntryContainer);
