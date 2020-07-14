import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { seasonSelectors } from './state/ducks/seasons';
import EventCard from './components/EventCard';

const Container = styled.div`
    
`;

const EventCardStyled = styled(EventCard)`
    margin-bottom: ${(props) => props.theme.spacing(3)}px; 
`;

const Schedule = () => {
    const events = useSelector(seasonSelectors.selectEvents);
    console.log('events :>> ', events);

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
