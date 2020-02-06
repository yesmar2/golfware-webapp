import React, { Component } from 'react';
import styled from 'styled-components'
import Input from './Input';

// const Container = styled(Input)`
//     height: 100%;
//     width: 64px;
//     border-left: ${props => props.theme.defaultBorder};
//     text-align: center;
// `;

class Entry extends Component {
    onChange = value => {
        this.props.onChange(this.props.holeNumber, value);
    }

    render() {
        const { focus } = this.props;
        
        return (
            <Input
                onChange={this.onChange}
                maxLength="1"
                focus={focus}
            />
        );
    }
}

export default Entry;