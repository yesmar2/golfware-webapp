import React from 'react';
import TextField from '../ui/Textfield';
import StepQuestionLabel from '../ui/StepQuestionLabel';

const TeamStep = () => (
    <>
        <StepQuestionLabel>How many teams are there?</StepQuestionLabel>
        <TextField
            fullWidth
            variant="outlined"
            // onChange={(event) => onChange(event.target.value)}
        />
        <StepQuestionLabel>How many players per team?</StepQuestionLabel>
        <TextField
            fullWidth
            variant="outlined"
            // onChange={(event) => onChange(event.target.value)}
        />
    </>
);

export default TeamStep;
