import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import Paper from '../Paper';
import ListItem from '../ui/ListItem';
import ListItemIcon from '../ui/ListItemIcon';
import ListItemText from '../ui/ListItemText';
import MatchupChip from '../MatchupChip';

const Container = styled(Paper)`
    
`;

const Event = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 50%;
    background: ${(props) => props.theme.palette.primary.main}
    font-size: 18px;
`;

const EventDateContainer = styled.div`
    flex: 1;
`;

const MatchupContainer = styled.div`
    flex: 1;
`;

const EventCard = (props) => {
    const {
        className,
        eventId,
        number,
        description,
        date,
        matchups,
    } = props;

    return (
        <Container className={className}>
            <ListItem>
                <ListItemIcon>
                    <Event>{number}</Event>
                </ListItemIcon>
                <ListItemText primaryText={description} />
                <EventDateContainer>{format(parseISO(date), 'MM/dd/yyyy')}</EventDateContainer>
                {matchups.map((matchup) => (
                    <MatchupContainer key={matchup.number}>
                        <MatchupChip text={`${matchup.teamOneNumber} vs ${matchup.teamTwoNumber}`} />
                    </MatchupContainer>
                ))}
                <Button variant="outlined" component={Link} to={`scoreentry/${eventId}`} color="primary">
                    Enter Scores
                </Button>
            </ListItem>
        </Container>
    );
};

export default EventCard;
