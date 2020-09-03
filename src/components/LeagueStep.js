import React from 'react';
import { Field } from 'formik';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { RadioGroup } from 'formik-material-ui';
import FormikTextField from '../ui/FormikTextField';
import StepQuestionLabel from '../ui/StepQuestionLabel';
import StepQuestionContainer from '../ui/StepQuestionContainer';
import GolfCourseField from './GolfCourseField';

const LeagueStep = () => (
    <>
        <StepQuestionLabel>Enter a name for your league</StepQuestionLabel>
        <StepQuestionContainer>
            <Field
                component={FormikTextField}
                name="leagueName"
                placeholder="e.g. Monday Night Men's League"
                variant="outlined"
                fullWidth
            />
        </StepQuestionContainer>
        <StepQuestionLabel>
            What golf course(s) will this league play at?
        </StepQuestionLabel>
        <StepQuestionContainer>
            <GolfCourseField />
        </StepQuestionContainer>
        <StepQuestionLabel>
            How many holes will your league be playing each round?
        </StepQuestionLabel>
        <StepQuestionContainer>
            <Field component={RadioGroup} name="numberOfHoles" row>
                <FormControlLabel
                    value="9"
                    control={<Radio color="primary" />}
                    label="9 holes"
                />
                <FormControlLabel
                    value="18"
                    control={<Radio color="primary" />}
                    label="18 holes"
                />
            </Field>
        </StepQuestionContainer>
    </>
);

export default LeagueStep;
