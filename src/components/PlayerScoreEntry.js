import React from 'react';
import styled from 'styled-components';
import { FaExchangeAlt } from 'react-icons/fa';
import ListItem from '../ui/ListItem';
import ListItemIcon from '../ui/ListItemIcon';
import ListItemText from '../ui/ListItemText';
import ScorecardCell from './ScorecardCell';
import TeamLogo from './TeamLogo';
import HandicapChip from './HandicapChip';
import Entry from './Entry';

const Container = styled.div``;

const StyledListItem = styled(ListItem)`
    padding-right: 0;
`;

const SubstitutionIcon = styled(FaExchangeAlt)`
    margin-left: ${(props) => props.theme.spacing(2)}px;
    margin-right: ${(props) => props.theme.spacing(2)}px;
    color: ${(props) => props.theme.palette.grey[300]};
    height: 16px;
    width: 16px;
`;

const Score = styled(ScorecardCell)`
    border-left: 1px solid ${(props) => props.theme.palette.grey[200]};
    font-size: 18px;
`;

const holesData = [
    {
        holeNumber: 1,
        par: 4,
        score: 0,
    },
    {
        holeNumber: 2,
        par: 3,
        score: 0,
    },
    {
        holeNumber: 3,
        par: 4,
        score: 0,
    },
    {
        holeNumber: 4,
        par: 4,
        score: 0,
    },
    {
        holeNumber: 5,
        par: 4,
        score: 0,
    },
    {
        holeNumber: 6,
        par: 3,
        score: 0,
    },
    {
        holeNumber: 7,
        par: 5,
        score: 0,
    },
    {
        holeNumber: 8,
        par: 4,
        score: 0,
    },
    {
        holeNumber: 9,
        par: 5,
        score: 0,
    },
];
class PlayerScoreEntry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            holeToFocus: 1,
            holes: holesData,
            // scores: {
            //     1: {
            //         score: 0
            //     },
            //     2: {
            //         score: 0
            //     },
            //     3: {
            //         score: 0
            //     },
            //     4: {
            //         score: 0
            //     },
            //     5: {
            //         score: 0
            //     },
            //     6: {
            //         score: 0
            //     },
            //     7: {
            //         score: 0
            //     },
            //     8: {
            //         score: 0
            //     },
            //     9: {
            //         score: 0
            //     }
            // }
        };
    }

    onChange = (holeNumber, value) => {
        if (value.length === 1) {
            this.setState(() => ({ holeToFocus: holeNumber + 1 }));
        }

        this.setState((currentState) => ({
            // scores: {
            //     ...currentState.scores,
            //     [holeNumber]: {
            //         score: value
            //     }
            // }
            holes: currentState.holes.map((hole) => {
                if (holeNumber === hole.holeNumber) {
                    return {
                        ...hole,
                        score: value,
                    };
                }

                return hole;
            }),
        }));
    };

    renderTotalScore = () => {
        const { holes } = this.state;

        const isScoreEntryComplete = holes.every((hole) => hole.score > 0);

        if (!isScoreEntryComplete) return null;

        return holes.reduce((total, hole) => total + parseInt(hole.score, 10), 0);
    };

    render() {
        const {
            name,
            teamNumber,
            teamColor,
            handicap,
            className,
        } = this.props;

        const {
            holeToFocus, holes,
        } = this.state;

        return (
            <Container className={className}>
                <StyledListItem>
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
                    <HandicapChip handicap={handicap} />
                    <SubstitutionIcon />
                    {holes.map((hole) => (
                        <Score key={hole.holeNumber}>
                            <Entry
                                holeNumber={hole.holeNumber}
                                onChange={this.onChange}
                                focus={hole.holeNumber === holeToFocus}
                            />
                        </Score>
                    ))}
                    <Score>{this.renderTotalScore()}</Score>
                    <Score />
                </StyledListItem>
            </Container>
        );
    }
}

export default PlayerScoreEntry;
