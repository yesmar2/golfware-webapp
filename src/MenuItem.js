import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.li`
    padding: ${props => props.theme.spacingSmall} ${props => props.theme.spacingLarge};
`;

const MenuItemLink = styled(Link)`
    display: flex;
    align-items: center;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
`;

const MenuItemIcon = styled.div`
    display: flex;
    margin-right: ${props => props.theme.spacingLarge};
    font-size: 18px;
`;

const MenuItemText = styled.div`
    
`;

const MenuItem = props => {
    const { icon, text, href } = props;

    return (
        <Container>
            <MenuItemLink to={href}>
                <MenuItemIcon>
                    {icon}
                </MenuItemIcon>
                <MenuItemText>
                    {text}
                </MenuItemText>
            </MenuItemLink>
        </Container>
    );
}

export default MenuItem;