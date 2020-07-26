import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { seasonSelectors } from './state/ducks/season';
import EventCard from './components/EventCard';

const Container = styled.div`
    
`;

const EventCardStyled = styled(EventCard)`
    margin-bottom: ${(props) => props.theme.spacing(3)}px; 
`;

const Schedule = () => {
    const events = useSelector(seasonSelectors.selectEvents);
    return (
        <Container>
            {events.map((event) => (
                <EventCardStyled
                    key={event.number}
                    eventId={event._id}
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
