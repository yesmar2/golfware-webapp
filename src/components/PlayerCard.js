import React from 'react';
import styled from 'styled-components';
import { FaExchangeAlt } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import Paper from './Paper';
import ListItem from '../ui/ListItem';
import ListItemIcon from '../ui/ListItemIcon';
import ListItemText from '../ui/ListItemText';
import TeamLogo from './TeamLogo';
import HandicapChip from './HandicapChip';
import ToggleSwitch from '../ui/ToggleSwitch';

const Container = styled(Paper)`
    cursor: pointer;
    transition-duration: 0.3s;
    transition-property: box-shadow, transform;

    :hover {
        transform: scale(1.02);
        box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.2);
    }
`;

const HandicapContainer = styled.div`
    flex: 1;
`;

const SkinsContainer = styled.div`
    flex: 2;
    display: flex;
`;

const SubstitutionIcon = styled(FaExchangeAlt)`
    color: ${(props) => props.theme.palette.grey[300]};
    height: 16px;
    width: 16px;
`;

const InfoIcon = styled(IoMdInformationCircleOutline)`
    color: ${(props) => props.theme.palette.grey[300]};
    margin-right: ${(props) => props.theme.spacing(1)}px;
    height: 24px;
    width: 24px;
`;

const StyledToggleSwitch = styled(ToggleSwitch)`
    margin-right: ${(props) => props.theme.spacing(3)}px;
`;

const PlayerCard = (props) => {
    const {
        name, teamNumber, teamColor, handicap, className,
    } = props;
    return (
        <Container className={className}>
            <ListItem>
                <ListItemIcon>
                    <TeamLogo
                        color={teamColor}
                        teamNumber={teamNumber}
                    />
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
};

export default PlayerCard;
