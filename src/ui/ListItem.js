import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 64px;
    padding-left: ${(props) => props.theme.spacing(2)}px;
    padding-right: ${(props) => props.theme.spacing(2)}px;
`;

const ListItem = (props) => {
    const {
        children, className, onClick,
    } = props;

    return (
        <Container className={className} onClick={onClick}>
            {children}
        </Container>
    );
};

export default ListItem;
