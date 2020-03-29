import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Paper from '../Paper';
import ListItem from '../ui/ListItem';
import ListItemIcon from '../ui/ListItemIcon';
import ListItemText from '../ui/ListItemText';

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

const PlayerCard = (props) => {
    const { className, eventNumber, eventType } = props;
    return (
        <Container className={className}>
            <ListItem>
                <ListItemIcon>
                    <Event>{eventNumber}</Event>
                </ListItemIcon>
                <ListItemText primaryText={eventType} />
                <Button variant="outlined" component={Link} to="/scoreentry" color="primary">
                    Enter Scores
                </Button>
            </ListItem>
        </Container>
    );
};

export default PlayerCard;
