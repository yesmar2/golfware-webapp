import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from 'yup';
import fetch from '../utils/fetch';
import Wizard, { WizardStep } from '../components/Wizard';
import LeagueStep from '../components/LeagueStep';
import SeasonStep from '../components/SeasonStep';
import TeamStep from '../components/TeamStep';
import { authSelectors } from '../state/ducks/auth';
import { leagueOperations } from '../state/ducks/leagues';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LeagueWizard = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const firebaseId = useSelector(authSelectors.selectUserFirebaseId);

    const onSubmit = async (values) => {
        const { leagueName, golfCourse, numberOfHoles } = values;

        const payload = {
            leagueName,
            admin: firebaseId,
            golfCourseId: golfCourse.courseId,
            numberOfHoles,
        };

        const leagueResult = await fetch('/league', 'POST', payload);
        await dispatch(leagueOperations.fetchLeaguesByFirebaseID(firebaseId));

        history.push(`/${leagueResult.seasons[0]}/dashboard`);
    };

    return (
        <Container>
            <Wizard
                initialValues={{
                    leagueName: '',
                    golfCourse: null,
                    numberOfHoles: '9',
                    eventDate: new Date(),
                    numEvents: '',
                    numTeams: '',
                    numPlayersPerTeam: '',
                }}
                onSubmit={onSubmit}
            >
                <WizardStep
                    label="League"
                    validationSchema={Yup.object({
                        leagueName: Yup.string().required('Required'),
                        golfCourse: Yup.object()
                            .nullable()
                            .required('Required'),
                    })}
                >
                    <LeagueStep />
                </WizardStep>
                <WizardStep
                    label="Season"
                    validationSchema={Yup.object({
                        numEvents: Yup.number()
                            .required('Required')
                            .max(52, 'Must be 52 or less')
                            .positive('Must be positive'),
                    })}
                >
                    <SeasonStep />
                </WizardStep>
                <WizardStep
                    label="Teams"
                    validationSchema={Yup.object({
                        numTeams: Yup.number()
                            .required('Required')
                            .max(20, 'Must be 20 or less')
                            .positive('Must be positive'),
                        numPlayersPerTeam: Yup.number()
                            .required('Required')
                            .max(4, 'Must be 4 or less')
                            .positive('Must be positive'),
                    })}
                >
                    <TeamStep />
                </WizardStep>
            </Wizard>
        </Container>
    );
};

export default LeagueWizard;
