import React from 'react';
import styled from 'styled-components';
import Paper from './Paper';
import ListItem from './ListItem';
import ListItemIcon from './ListItemIcon';
import ListItemText from './ListItemText';
import TeamLogo from './TeamLogo';
import HandicapChip from './HandicapChip';
import ToggleSwitch from './ToggleSwitch';
import { FaExchangeAlt } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';

const Container = styled(Paper)`
    cursor: pointer;
`;

const HandicapContainer = styled.div`
    flex: 1;
`;

const SkinsContainer = styled.div`
    flex: 2;
    display: flex;
`;

const SubstitutionIcon = styled(FaExchangeAlt)`
    color: ${props => props.theme.colors.grey[300]};
    height: 16px;
    width: 16px;
`;

const InfoIcon = styled(IoMdInformationCircleOutline)`
    color: ${props => props.theme.colors.grey[300]};
    margin-right: ${props => props.theme.spacingSmall};
    height: 24px;
    width: 24px;
`;

const StyledToggleSwitch = styled(ToggleSwitch)`
    margin-right: ${props => props.theme.spacingLarge};
`;

class PlayerCard extends React.Component {
    render() {
        const {
            name,
            teamNumber,
            teamColor,
            handicap,
            className
        } = this.props;

        return (
            <Container className={className}>
                <ListItem>
                    <ListItemIcon>
                        <TeamLogo color={teamColor} />
                    </ListItemIcon>
                    <ListItemText
                        primaryText={name}
                        secondaryText={`Team ${teamNumber}`}
                    />
                    <HandicapContainer>
                        <HandicapChip handicap={handicap} />
                    </HandicapContainer>
                    <SkinsContainer>
                        <StyledToggleSwitch label="Scratch Skins" />
                        <ToggleSwitch label="Net Skins" />
                    </SkinsContainer>
                    <InfoIcon />
                    <SubstitutionIcon />
                </ListItem>
            </Container>
        );
    }
}

export default PlayerCard;