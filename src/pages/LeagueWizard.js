import React from 'react';
import styled from 'styled-components';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MdCheck } from 'react-icons/md';
import LeagueStep from '../components/LeagueStep';
import SeasonStep from '../components/SeasonStep';
import TeamStep from '../components/TeamStep';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StepperStyled = styled(Stepper)`
    width: 100%;
    background: transparent;
`;

const StepContent = styled.div`
    width: 600px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${(props) => props.theme.spacing(6)}px;
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

function getSteps() {
    return [
        'League',
        'Season',
        'Teams',
    ];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
    case 0:
        return <LeagueStep />;
    case 1:
        return <SeasonStep />;
    case 2:
        return <TeamStep />;
    default:
        return 'Unknown stepIndex';
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Container>
            <StepperStyled
                activeStep={activeStep}
                alternativeLabel
                connector={<StepConnectorStyled />}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </StepperStyled>
            <StepContent>
                {activeStep === steps.length ? (
                    <div>
                        <Typography>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <>
                        {getStepContent(activeStep)}
                        <ButtonContainer>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                size="large"
                            >
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                size="large"
                            >
                                {activeStep === steps.length - 1
                                    ? 'Finish'
                                    : 'Next'}
                            </Button>
                        </ButtonContainer>
                    </>
                )}
            </StepContent>
        </Container>
    );
}
