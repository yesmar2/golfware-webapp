import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FaSearch } from 'react-icons/fa';

const TextFieldStyled = styled(TextField)`
    margin-right: ${(props) => props.theme.spacing(2)}px;
    background: #fff;
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
                        <FaSearch />
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default Search;
