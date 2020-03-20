import React, { useState } from 'react';
import styled from 'styled-components';
import { MdSort, MdExpandMore } from 'react-icons/md';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';

// const Container = styled.div`
//     height: 48px;
//     width: 150px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// `;

const SortIcon = styled(MdSort)`
    height: 24px;
    width: 24px;
`;

const ExpandMoreIcon = styled(MdExpandMore)`
    height: 24px;
    width: 24px;
`;

const FormControlStyled = styled(FormControl)`
    height: 100%;
    width: 200px;
`;

const SortDropdown = () => {
    const [sortType, setSortType] = useState('name');
    const handleChange = (event) => {
        setSortType(event.target.value);
    };

    return (
        <FormControlStyled variant="outlined">
            <Select
                labelId="sortDropdownLabel"
                id="sortDropdown"
                value={sortType}
                onChange={handleChange}
                IconComponent={ExpandMoreIcon}
                startAdornment={(
                    <InputAdornment position="start">
                        <SortIcon />
                    </InputAdornment>
                )}
            >
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="handicap">Handicap</MenuItem>
                <MenuItem value="netSkins">Net Skins</MenuItem>
                <MenuItem value="grossSkins">Gross Skins</MenuItem>
            </Select>
        </FormControlStyled>
    );
};

export default SortDropdown;
