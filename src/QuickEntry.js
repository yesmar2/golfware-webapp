import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    padding: ${props => props.theme.spacing}px
`;

class QuickEntry extends Component {
    render() {
        return (
            <Container>
                Quick Entry
            </Container>
        );
    }
}

export default QuickEntry;
