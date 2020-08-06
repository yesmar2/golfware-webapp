import React from 'react';
// import Button from '@material-ui/core/Button';
import TextField from '../ui/Textfield';
import StepQuestionLabel from '../ui/StepQuestionLabel';

const LeagueStep = () => (
    <>
        <StepQuestionLabel>Enter a name for your league</StepQuestionLabel>
        <TextField
            fullWidth
            placeholder="e.g. Monday Night Men's League"
            variant="outlined"
        />
        {/* <StepQuestionLabel>
            Does your league play 9 or 18 holes?
        </StepQuestionLabel> */}
        <StepQuestionLabel>
            What golf course(s) will this league play at?
        </StepQuestionLabel>
        <TextField
            fullWidth
            variant="outlined"
        />
    </>
);

export default LeagueStep;
