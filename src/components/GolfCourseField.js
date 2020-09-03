import React from 'react';
import styled from 'styled-components';
import { Field, useFormikContext } from 'formik';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '../ui/TextField';

const golfCourseOptions = [
    { name: 'Bemus Point Golf Course', courseId: '1234' },
    { name: 'Maplehurst Country Club', courseId: '1235' },
];

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
                    component={TextField}
                    name="golfCourse"
                    variant="outlined"
                    fullWidth
                />
            )}
        />
    );
};

export default LeagueStep;
