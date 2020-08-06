import React from 'react';
import TextField from '../ui/Textfield';
import StepQuestionLabel from '../ui/StepQuestionLabel';

const SeasonStep = () => (
    <>
        <StepQuestionLabel>When is your first event?</StepQuestionLabel>
        <TextField
            fullWidth
            variant="outlined"
            // onChange={(event) => onChange(event.target.value)}
        />
        <StepQuestionLabel>How many events will be played?</StepQuestionLabel>
        <TextField
            fullWidth
            variant="outlined"
            // onChange={(event) => onChange(event.target.value)}
        />
    </>
);

export default SeasonStep;
