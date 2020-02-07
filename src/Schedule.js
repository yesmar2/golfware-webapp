import React, { Component } from 'react';
import styled from 'styled-components';
import { get } from './utils';

const Container = styled.div`
    display: flex;
`;

class ScoreEntry extends Component {
    state = {
        events: []
    }

    async componentDidMount() {
        const events = await get(`/api/events`) || [];

        this.setState({
            events,
        });
    }

    render() {
        const { events } = this.state;

        return (
            <Container>
                Schedule
            </Container>
        );
    }
}

export default ScoreEntry;
