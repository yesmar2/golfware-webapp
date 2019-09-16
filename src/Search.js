import React from 'react';
import styled from 'styled-components'
import Input from './Input';

const Container = styled(Input)`
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.grey[200]};
    padding-left: ${props => props.theme.spacingMedium};
    padding-right: ${props => props.theme.spacingMedium};
    margin-bottom: ${props => props.theme.spacingMedium};
    border-radius: 4px;
`;

const Search = props => {
    const { onChange, className } = props;

    return (
        <Container
            placeholder="Search..."
            onChange={onChange}
            className={className}>

        </Container>
    );
}

export default Search;