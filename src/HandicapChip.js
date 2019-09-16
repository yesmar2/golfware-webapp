import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: inline-flex;
    align-items: center;
    height: 24px;
    background-color: #e7f1ec;
    color: ${props => props.theme.colors.green};
    padding-left: ${props => props.theme.spacingMedium};
    padding-right: ${props => props.theme.spacingMedium};
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
`; 

const HandicapChip = ({ handicap }) => {
    return (
        <Container>
            Handicap: {handicap}
        </Container>
    );
}

export default HandicapChip;