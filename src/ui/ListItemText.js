import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
`;

const PrimaryText = styled.div`
    font-weight: 500;
    margin-bottom: ${(props) => props.theme.spacingTiny};
`;

const SecondaryText = styled.div`
    font-size: 12px;
    color: ${(props) => props.theme.colors.grey[300]};
`;

const ListItemText = (props) => {
    const { className, primaryText, secondaryText } = props;

    return (
        <Container className={className}>
            <PrimaryText>{primaryText}</PrimaryText>
            {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
        </Container>
    );
};

export default ListItemText;
