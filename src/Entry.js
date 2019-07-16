import React, { Component } from 'react';
import styled from 'styled-components'
import Input from './Input';

const Container = styled(Input)`
    height: 100%;
    width: 56px;
    border-left: 1px solid ${props => props.theme.colors.grey[200]}; 
    text-align: center;
`;

class Entry extends Component {
    onChange = () => {
        console.log("onChange");
    }

    render() {
        return (
            <Container onChange={this.onChange}>
    
            </Container>
        );
    }
}

export default Entry;