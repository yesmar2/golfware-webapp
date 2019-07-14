import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    border: 1px solid ${props => props.theme.borderColor};
    padding: ${props => props.theme.spacingMedium};
    margin-bottom: ${props => props.theme.spacingMedium};
`;

const Input = styled.input`
    border: none;
    outline: none;
`;

class Search extends Component {

    onChange = (event) => {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <Container>
                <Input 
                    placeholder="Placeholder..."
                    onChange={this.onChange} />
            </Container>
        );
    }
}

export default Search;