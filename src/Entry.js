import React, { Component } from 'react';
import Input from './Input';

class Entry extends Component {
    onChange = (value) => {
        const {
            onChange, holeNumber,
        } = this.props;
        onChange(holeNumber, value);
    };

    render() {
        const { focus } = this.props;

        return <Input onChange={this.onChange} maxLength="1" focus={focus} />;
    }
}

export default Entry;
