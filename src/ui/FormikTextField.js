import styled from 'styled-components';
import { TextField } from 'formik-material-ui';
import { inputStyles } from './styleUtils';

export default styled(TextField)`
    ${(props) => inputStyles(props.theme)}
`;
