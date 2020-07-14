/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { seasonSelectors } from '../state/ducks/seasons';
import { leagueSelectors } from '../state/ducks/leagues';
import { ReactComponent as Logo } from '../images/golfware-logo-white.svg';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const LogoContainer = styled(Link)`
    position: absolute;
    width: 72px;
    left: -96px;
    border-right: 1px solid rgba(256, 256, 256, 0.7);
    transition: left 200ms, width 200ms;
`;

const LogoStyled = styled(Logo)`
    height: 48px;
    width:  48px;
    transition: height 200ms, width: 200ms;
`;

const Nav = styled.nav`
    position: absolute;
    bottom: 0;
`;

const TabStyled = styled(Tab)`
    padding: ${(props) => props.theme.spacing(2)}px ${(props) => props.theme.spacing(3)}px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
`;

const FormControlStyled = styled(FormControl)`
    & .MuiInputBase-root {
        font-size: 30px;
        font-weight: normal;
        color: ${(props) => props.theme.palette.grey[100]};
        
        &.Mui-focused {
            background: none;
        }

        &.MuiInput-underline:before,
        &.MuiInput-underline:after {
            border: none;
        }
    }  

    & .MuiSelect-select:focus {
        background: none;
    }
`;

const LeagueNav = ({ className }) => {

    const handleChange = (event) => {
        // setSelectedLeagueId(event.target.value);
    };

    const location = useLocation();
    const leagues = useSelector(leagueSelectors.selectData);
    const season = useSelector(seasonSelectors.selectData);
    
    const {
        _id: seasonId,
        leagueId,
    } = season;

    if (!leagueId) return null;

    return (
        <Container className={className}>
            <LogoContainer to="/leagues">
                <LogoStyled />
            </LogoContainer>
            <FormControlStyled>
                <Select
                    labelId="leagueDropdownLabel"
                    id="leagueDropdown"
                    value={leagueId}
                    onChange={handleChange}
                    MenuProps={{
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "left"
                        },
                        getContentAnchorEl: null
                    }}
                >
                    {leagues.map((league) => (
                        <MenuItem key={league._id} value={league._id}>{league.name}</MenuItem>
                    ))}
                </Select>
            </FormControlStyled>
            <Nav>
                <Tabs value={location.pathname}>
                    <TabStyled label="Dashboard" component={NavLink} to="dashboard" value={`/${seasonId}/dashboard`} />
                    <TabStyled label="Schedule" component={NavLink} to="schedule" value={`/${seasonId}/schedule`} />
                    <TabStyled label="Players" component={NavLink} to="players" value={`/${seasonId}/players`} />
                </Tabs>
            </Nav>
        </Container>
    );
};

export default LeagueNav;
