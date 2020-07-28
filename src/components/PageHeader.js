import React from 'react';
import styled from 'styled-components';
import { MdExpandMore } from 'react-icons/md';


const Container = styled.div`
    ${({ theme }) => `
        display: flex;
        align-items: center;
        margin-bottom: ${theme.spacing(3)};
    `}
`;

const Heading3 = styled.h3`
    font-size: 18px;
`;

const WeekDropdown = styled.div`
    ${({ theme }) => `
        display: flex;
        align-items: flex-end;
        margin-left: ${theme.spacing(2)};
    `}
`;

const WeekDropdownText = styled.span`
    ${({ theme }) => `
        font-weight: 600;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-right: ${theme.spacing(0.5)};
    `}
`;

const PageHeader = (props) => {
    const { title } = props;

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
