import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-right: ${(props) => props.theme.spacingMedium};
`;

const ListItemIcon = (props) => {
    const {
        className,
        children,
    } = props;

    return (
        <Container className={className}>
            {children}
        </Container>
    );
};

export default ListItemIcon;
