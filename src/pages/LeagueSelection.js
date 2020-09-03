import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { ReactComponent as GolfIllustration } from '../images/golf-illustration.svg';
import { leagueSelectors } from '../state/ducks/leagues';

const Container = styled.div`
    height: 100%;
`;

const EmptyStateContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const GolfIllustrationStyled = styled(GolfIllustration)`
    height: 400px;
`;

const EmtpyStateText = styled.p`
    font-size: 24px;
    margin: ${(props) => props.theme.spacing(2)}px 0;
`;

const EmtpyStateSubText = styled.p`
    color: ${(props) => props.theme.palette.grey[400]};
    margin: 0 0 ${(props) => props.theme.spacing(3)}px 0;
`;

const LeagueSelection = () => {
    const leagues = useSelector(leagueSelectors.selectData);
    // const leagues = [];
    return (
        <Container>
            {leagues.length === 0 ? (
                <EmptyStateContainer>
                    <GolfIllustrationStyled />
                    <EmtpyStateText>
                        Let&apos;s create your first league.
                    </EmtpyStateText>
                    <EmtpyStateSubText>
                        We&apos;ll guide you through our league creation wizard.
                    </EmtpyStateSubText>
                    <Button variant="contained" component={Link} to="league-wizard" color="primary">
                        Create League
                    </Button>
                </EmptyStateContainer>
            ) : (
                <div>
                    {leagues.map((league) => (
                        <div key={league._id}>
                            <Link to={`${league.activeSeasonId}/dashboard`}>{league.leagueName}</Link>
                        </div>
                    ))}
                </div>
            )}
        </Container>
    );
};

export default LeagueSelection;
