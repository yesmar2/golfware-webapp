import React from 'react';
import styled from 'styled-components';
import Chip from '../ui/Chip';

const StyledChip = styled(Chip)`
    background-color: #e7f1ec;
    color: ${(props) => props.theme.palette.green};
`;

const HandicapChip = ({ handicap }) => (
    <StyledChip text={`Handicap: ${handicap}`} />
);

export default HandicapChip;
