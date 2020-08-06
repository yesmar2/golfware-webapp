import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { inputStyles } from './styleUtils';

export default styled(TextField)`
    ${(props) => inputStyles(props.theme)}
`;
