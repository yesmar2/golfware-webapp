import React from 'react';
import Input from './Input';

const Entry = (props) => {
    const onEntryChange = (value) => {
        const { onChange, holeNumber } = props;
        onChange(holeNumber, value);
    };

    const { focus } = props;

    return <Input onChange={onEntryChange} maxLength="1" focus={focus} />;
};

export default Entry;
