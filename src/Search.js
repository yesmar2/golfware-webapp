import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    border: 1px solid ${props => props.theme.borderColor};
    padding: ${props => props.theme.spacingMedium};
    margin-bottom: ${props => props.theme.spacingMedium};
`;

const Input = styled.input`
    border: none;
`;

const Search = props => {
    return (
        <Container>
            <Input placeholder="Placeholder..." />
        </Container>
    );
}

export default Search;