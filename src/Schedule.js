import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { leagueSelectors } from './state/ducks/leagues';
import { eventOperations, eventSelectors } from './state/ducks/events';
import EventCard from './components/EventCard';

const Container = styled.div`
    
`;

const EventCardStyled = styled(EventCard)`
    margin-bottom: ${(props) => props.theme.spacing(3)}px; 
`;

const Schedule = () => {
    const events = useSelector(eventSelectors.selectData);
    const success = useSelector(eventSelectors.selectSuccess);
    const activeSeasonId = useSelector(leagueSelectors.selectActiveSeasonId);
    // const hasLoaded = useSelector(eventSelectors.selectHasLoaded);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!success && activeSeasonId) {
            dispatch(eventOperations.fetchEventsBySeasonId(activeSeasonId));
        }
    }, [dispatch, success, activeSeasonId]);

    return (
        <Container>
            {events.map((event) => (
                <EventCardStyled
                    key={event.number}
                    number={event.number}
                    description={event.description}
                    date={event.date}
                    matchups={event.matchups}
                />
            ))}
        </Container>
    );
};

export default Schedule;
