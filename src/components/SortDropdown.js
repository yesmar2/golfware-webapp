import React, { useState } from 'react';
import styled from 'styled-components';
import { MdSwapVert } from 'react-icons/md';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { inputStyles } from '../ui/styleUtils';

const SortIcon = styled(MdSwapVert)`
    height: 24px;
    width: 24px;
`;

const FormControlStyled = styled(FormControl)`
    height: 100%;
    width: 150px;
    ${(props) => inputStyles(props.theme)}
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
                IconComponent={SortIcon}
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
