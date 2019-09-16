import React, { Component } from 'react';
import styled from 'styled-components';
import Paper from './Paper';
import { MdSort, MdExpandMore } from 'react-icons/md';

const Container = styled(Paper)`
    height: 48px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: ${props => props.theme.spacingMedium};
    padding-right: ${props => props.theme.spacingMedium};
    border-radius: 4px;
`;

const SortIcon = styled(MdSort)`
    color: ${props => props.theme.colors.grey[300]};
    height: 24px;
    width: 24px;
`;

const ExpandMoreIcon = styled(MdExpandMore)`
    color: ${props => props.theme.colors.grey[300]};
    height: 24px;
    width: 24px;
`;

class SortDropdown extends Component {
    render() {
        return (
            <Container>
                <SortIcon />
                <span>Name</span>
                <ExpandMoreIcon />
            </Container>
            
        );
    }
}

export default SortDropdown;