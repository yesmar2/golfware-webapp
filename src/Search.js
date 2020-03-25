import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FaSearch } from 'react-icons/fa';
import { inputStyles } from './ui/styleUtils';

const TextFieldStyled = styled(TextField)`
    background: #fff;
    ${(props) => inputStyles(props.theme)}
`;

const FaSearchStyled = styled(FaSearch)`
    color: ${(props) => props.theme.palette.grey[300]};
`;

const Search = (props) => {
    const { onChange, className } = props;

    return (
        <TextFieldStyled
            placeholder="Search for a player..."
            variant="outlined"
            className={className}
            onChange={(event) => onChange(event.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <FaSearchStyled />
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default Search;
