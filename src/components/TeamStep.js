import React from 'react';
import NumericField from './NumericField';
import StepQuestionLabel from '../ui/StepQuestionLabel';
import StepQuestionContainer from '../ui/StepQuestionContainer';

const TeamStep = () => (
    <>
        <StepQuestionLabel>How many teams are there?</StepQuestionLabel>
        <StepQuestionContainer>
            <NumericField name="numTeams" />
        </StepQuestionContainer>
        <StepQuestionLabel>How many players per team?</StepQuestionLabel>
        <StepQuestionContainer>
            <NumericField name="numPlayersPerTeam" />
        </StepQuestionContainer>
    </>
);

export default TeamStep;
