import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.li`
    padding: ${(props) => props.theme.spacing(1)}px ${(props) => props.theme.spacing(3)}px;
`;

const MenuItemLink = styled(Link)`
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
`;

const MenuItemIcon = styled.div`
    display: flex;
    margin-right: ${(props) => props.theme.spacing(3)}px;
    font-size: 18px;
`;

const MenuItemText = styled.div`
    
`;

const MenuItem = (props) => {
    const {
        icon, text, href,
    } = props;

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
};

export default MenuItem;
