import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import Input from './Input';

const Container = styled(Input)`
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.colors.grey[300]};
`;

const Search = (props) => {
    const { onChange, className } = props;

    return (
        <Container
            placeholder="Search for a player..."
            onChange={onChange}
            className={className}
            leftIcon={<FaSearch />}
        />
    );
};

export default Search;
