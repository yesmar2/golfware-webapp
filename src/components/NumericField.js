import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
import { Field } from 'formik';
import FormikTextField from '../ui/FormikTextField';

const FieldStyled = styled(Field)`
    align-items: center;    

    & .MuiInputBase-root {
        width: 80px;
    }

    & .MuiInputBase-input {
        text-align: center;
    }
`;

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...other}
            format="##"
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
        />
    );
}

const NumericField = (props) => {
    const { name } = props;
    return (
        <FieldStyled
            component={FormikTextField}
            name={name}
            InputProps={{
                inputComponent: NumberFormatCustom,
            }}
            variant="outlined"
        />
    );
};

export default NumericField;
