import React from 'react';
import styled from 'styled-components';
import { Field, useFormikContext } from 'formik';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormikTextField from '../ui/FormikTextField';

const golfCourseOptions = [{ name: 'Bemus Point Golf Course', courseId: '1234' }];

const AutocompleteStyled = styled(Autocomplete)`
    width: 100%;
`;

const LeagueStep = () => {
    const { values, setFieldValue } = useFormikContext();

    return (
        <AutocompleteStyled
            name="golfCourse"
            options={golfCourseOptions}
            getOptionLabel={(option) => option.name}
            value={values.golfCourse}
            onChange={(e, value) => {
                setFieldValue('golfCourse', value);
            }}
            renderInput={(params) => (
                <Field
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...params}
                    component={FormikTextField}
                    name="golfCourse"
                    variant="outlined"
                    fullWidth
                />
            )}
        />
    );
};

export default LeagueStep;
