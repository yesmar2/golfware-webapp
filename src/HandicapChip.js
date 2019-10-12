import React from 'react';
import styled from 'styled-components';
import Chip from './Chip';

const StyledChip = styled(Chip)`
    background-color: #e7f1ec;
    color: ${props => props.theme.colors.green};
`; 

const HandicapChip = ({ handicap }) => {
    return (
        <StyledChip text={`Handicap: ${handicap}`} />
    );
}

export default HandicapChip;