/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { MdCheck } from 'react-icons/md';

const FormStyled = styled(Form)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StepperStyled = styled(Stepper)`
    width: 100%;
    background: transparent;
`;

const StepConnectorStyled = styled(StepConnector)`
    & .MuiStepConnector-line {
        border-color: ${(props) => props.theme.palette.grey[200]};
        border-top-width: 3px;
        border-radius: 1px;
    }

    &.MuiStepConnector-active {
        & .MuiStepConnector-line {
            border-color: ${(props) => props.theme.palette.primary.main};
        }
    }

    &.MuiStepConnector-completed {
        & .MuiStepConnector-line {
            border-color: ${(props) => props.theme.palette.primary.main};
        }
    }

    &.MuiStepConnector-alternativeLabel {
        left: calc(-50% + 36px);
        right: calc(50% + 36px);
    }
`;

const StepIconContainer = styled.div`
    display: flex;
    height: 22px;
    align-items: center;
`;

const StepContent = styled.div`
    width: 600px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${(props) => props.theme.spacing(6)}px;
`;

const CheckStyled = styled(MdCheck)`
    color: ${(props) => props.theme.palette.primary.main};
    z-index 1;
    font-size: 32px;
`;

const Circle = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: 
        ${(props) => (props.active
        ? props.theme.palette.primary.main
        : props.theme.palette.grey[200])};
`;

const StepIcon = ({ active, completed }) => (
    <StepIconContainer>
        {completed ? <CheckStyled /> : <Circle active={active} />}
    </StepIconContainer>
);

export const WizardStep = ({ children }) => children;

const Wizard = ({ children, initialValues, onSubmit }) => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = React.Children.toArray(children);
    const [snapshot, setSnapshot] = useState(initialValues);

    const step = steps[activeStep];
    const totalSteps = steps.length;
    const isLastStep = activeStep === totalSteps - 1;

    const next = (values) => {
        setSnapshot(values);
        setActiveStep(Math.min(activeStep + 1, totalSteps - 1));
    };

    const previous = (values) => {
        setSnapshot(values);
        setActiveStep(Math.max(activeStep - 1, 0));
    };

    const handleSubmit = async (values, bag) => {
        if (step.props.onSubmit) {
            await step.props.onSubmit(values, bag);
        }

        if (isLastStep) {
            onSubmit(values, bag);
        } else {
            bag.setTouched({});
            next(values);
        }
    };

    return (
        <Formik
            initialValues={snapshot}
            onSubmit={handleSubmit}
            validationSchema={step.props.validationSchema}
        >
            {(formik) => (
                <FormStyled>
                    <StepperStyled
                        activeStep={activeStep}
                        alternativeLabel
                        connector={<StepConnectorStyled />}
                    >
                        {steps.map(({ props }) => (
                            <Step key={props.label}>
                                <StepLabel StepIconComponent={StepIcon}>{props.label}</StepLabel>
                            </Step>
                        ))}
                    </StepperStyled>
                    <StepContent>
                        {step}
                    </StepContent>
                    <ButtonContainer>
                        <Button
                            disabled={activeStep === 0}
                            onClick={() => previous(formik.values)}
                            size="large"
                        >
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            type="submit"
                            disabled={formik.isSubmitting}
                        >
                            {isLastStep ? 'Submit' : 'Next'}
                        </Button>
                    </ButtonContainer>
                </FormStyled>
            )}
        </Formik>
    );
};

export default Wizard;
