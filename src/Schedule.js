import React from 'react';
import styled from 'styled-components';
import EventCard from './components/EventCard';

const Container = styled.div`
    
`;

const EventCardStyled = styled(EventCard)`
    margin-bottom: ${(props) => props.theme.spacing(3)}px; 
`;

const Schedule = () => (
    <Container>
        <EventCardStyled eventNumber={1} eventType="Match Play" />
        <EventCardStyled eventNumber={2} eventType="Match Play" />
        <EventCardStyled eventNumber={3} eventType="Scramble" />
        <EventCardStyled eventNumber={4} eventType="Match Play" />
        <EventCardStyled eventNumber={5} eventType="Match Play" />
    </Container>
);

export default Schedule;
