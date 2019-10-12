import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import ListItemIcon from './ListItemIcon';
import ListItemText from './ListItemText';
import TeamLogo from './TeamLogo';
import HandicapChip from './HandicapChip';
import { FaExchangeAlt } from 'react-icons/fa';
import Entry from './Entry';

const Container = styled.div`
    
`;

const StyledListItem = styled(ListItem)`
    padding-right: 0;
`;

const SubstitutionIcon = styled(FaExchangeAlt)`
    margin-left: ${props => props.theme.spacingMedium};
    margin-right: ${props => props.theme.spacingMedium};
    color: ${props => props.theme.colors.grey[300]};
    height: 16px;
    width: 16px;
`;

const PlayerScoreEntry = props => {
    const {
        name,
        teamNumber,
        teamColor,
        handicap,
        className
    } = props;

    return (
        <Container className={className}>
            <StyledListItem>
                <ListItemIcon>
                    <TeamLogo color={teamColor} />
                </ListItemIcon>
                <ListItemText
                    primaryText={name}
                    secondaryText={`Team ${teamNumber}`}
                />
                <HandicapChip handicap={handicap} />
                <SubstitutionIcon />
                <Entry />
                <Entry />
                <Entry />
                <Entry />
                <Entry />
                <Entry />
                <Entry />
                <Entry />
                <Entry />
                <Entry />
                <Entry />
            </StyledListItem>
        </Container>
    )
}

export default PlayerScoreEntry;