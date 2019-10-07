import React, { Component } from 'react';
import styled from 'styled-components';
import Paper from './Paper';
import { MdSort, MdExpandMore } from 'react-icons/md';

const Container = styled.div`
    height: 48px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme.colors.grey[300]};
`;

const SortIcon = styled(MdSort)`
    height: 24px;
    width: 24px;
`;

const ExpandMoreIcon = styled(MdExpandMore)`
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