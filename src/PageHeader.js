import React from 'react';
import styled from 'styled-components';
import { MdExpandMore } from 'react-icons/md';


const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: ${(props) => props.theme.spacingLarge};
`;

const Heading3 = styled.h3`
    font-size: 18px;
`;

const WeekDropdown = styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: ${(props) => props.theme.spacingMedium};
`;

const WeekDropdownText = styled.span`
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-right: ${(props) => props.theme.spacingTiny};
`;

const PageHeader = (props) => {
    const {
        title,
    } = props;

    return (
        <Container>
            <Heading3>
                {title}
            </Heading3>
            <WeekDropdown>
                <WeekDropdownText>
                    Week 2
                </WeekDropdownText>
                <MdExpandMore />
            </WeekDropdown>
        </Container>
    );
};

export default PageHeader;
