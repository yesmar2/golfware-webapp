import React from 'react';
import styled from 'styled-components';
import Paper from './Paper';
import TeamLogo from './TeamLogo';
import HandicapChip from './HandicapChip';
import ToggleSwitch from './ToggleSwitch';
import { FaExchangeAlt } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';

const Container = styled(Paper)`
    display: flex;
    align-items: center;
    height: 64px;
    padding-left: ${props => props.theme.spacingMedium};
    padding-right: ${props => props.theme.spacingMedium};
    cursor: pointer;

    :hover {
        border: 1px solid ${props => props.theme.colors.green};
    }
`;

const NameContainer = styled.div`
    flex: 1;
    margin-left: ${props => props.theme.spacingMedium};
`;

const Name = styled.div`
    font-weight: 500;
    margin-bottom: ${props => props.theme.spacingTiny};
`;

const Team = styled.div`
    font-size: 12px;
    color: ${props => props.theme.colors.grey[300]};
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
    onClick = () => {
        console.log("clicked");
    }

    render() {
        const {
            name,
            teamNumber,
            teamColor,
            handicap,
            className
        } = this.props;

        return (
            <Container
                className={className}
                onClick={this.onClick}>
                <TeamLogo color={teamColor} />
                <NameContainer>
                    <Name>
                        {name}
                    </Name>
                    <Team>
                        Team {teamNumber}
                    </Team>
                </NameContainer>
                <HandicapContainer>
                    <HandicapChip handicap={handicap} />
                </HandicapContainer>
                <SkinsContainer>
                    <StyledToggleSwitch label="Scratch Skins" />
                    <ToggleSwitch label="Net Skins" />
                </SkinsContainer>
                <InfoIcon />
                <SubstitutionIcon />
            </Container>
        );
    }
}

export default PlayerCard;