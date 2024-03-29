import React from 'react';
import styled from 'styled-components';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FaSearch } from 'react-icons/fa';
import TextField from '../ui/TextField';

const FaSearchStyled = styled(FaSearch)`
    color: ${(props) => props.theme.palette.grey[300]};
`;

const Search = (props) => {
    const { onChange, className } = props;

    return (
        <TextField
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
