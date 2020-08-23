import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';
import { DatePicker } from 'formik-material-ui-pickers';
import NumericField from './NumericField';
import StepQuestionLabel from '../ui/StepQuestionLabel';
import StepQuestionContainer from '../ui/StepQuestionContainer';
import { inputStyles } from '../ui/styleUtils';

const StyledDatePicker = styled(DatePicker)`
    ${(props) => inputStyles(props.theme)}
`;

const SeasonStep = () => (
    <>
        <StepQuestionLabel>When is your first event?</StepQuestionLabel>
        <StepQuestionContainer>
            <Field
                component={StyledDatePicker}
                name="eventDate"
                inputVariant="outlined"
            />
        </StepQuestionContainer>
        <StepQuestionLabel>How many events will be played?</StepQuestionLabel>
        <StepQuestionContainer>
            <NumericField name="numEvents" />
        </StepQuestionContainer>
    </>
);

export default SeasonStep;
