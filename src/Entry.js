import React, { Component } from 'react';
import styled from 'styled-components'
import Input from './Input';

const Container = styled(Input)`
    height: 100%;
    width: 56px;
    border-left: 1px solid ${props => props.theme.colors.grey[200]}; 
    text-align: center;

    &:last-child {
        border-top-right-radius: 7px;
        border-bottom-right-radius: 7px;
    }
`;

class Entry extends Component {
    onChange = () => {

    }

    render() {
        return (
            <Container 
                onChange={this.onChange}
                maxLength="1">
    
            </Container>
        );
    }
}

export default Entry;