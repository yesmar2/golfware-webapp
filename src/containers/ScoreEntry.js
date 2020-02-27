import React from 'react';
import { connect } from 'react-redux';
import {
    playerOperations, playerSelectors,
} from '../state/ducks/players';
import ScoreEntry from '../components/ScoreEntry';

class ScoreEntryContainer extends React.Component {
    componentDidMount() {
        const {
            fetchPlayers, success,
        } = this.props;

        // TODO: add expired check once it's been added to apiDuckUtils.js
        if (!success) {
            fetchPlayers();
        }
    }

    render() {
        const {
            players, setPlayerFilter,
        } = this.props;
        return <ScoreEntry players={players} setPlayerFilter={setPlayerFilter} />;
    }
}

const mapDispatchToProps = {
    fetchPlayers: playerOperations.fetchPlayers,
    setPlayerFilter: playerOperations.setPlayerFilter,
};

function mapStateToProps(appState) {
    return {
        players: playerSelectors.selectPlayers(appState),
        success: playerSelectors.selectSuccess(appState),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreEntryContainer);
