import React from 'react';
import styled from 'styled-components'
import Input from './Input';

const Container = styled(Input)`
    width: 100%;
    display: flex;
    border: 1px solid ${props => props.theme.colors.grey[200]};
    padding: ${props => props.theme.spacingMedium};
    margin-bottom: ${props => props.theme.spacingMedium};
    border-radius: 4px;
`;

const Search = props => {
    const { onChange } = props;

    return (
        <Container onChange={onChange}>

        </Container>
    );
}

export default Search;