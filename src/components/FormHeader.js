import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const BackIconContainer = styled.div`
    border-right: 1px solid rgba(256, 256, 256, 0.7);
    margin-right: ${(props) => props.theme.spacing(4)}px;
    padding-right: ${(props) => props.theme.spacing(3)}px;
    cursor: pointer;
`;

const BackIconStyled = styled(FiChevronLeft)`
    font-size: 36px;
    color: #fff;
`;

const Heading = styled.h1`
    font-size: 24px;
    font-weight: normal;
    color: ${(props) => props.theme.palette.grey[100]};
`;

const FormHeader = ({ title }) => {
    const history = useHistory();

    return (
        <Container>
            <BackIconContainer onClick={() => history.goBack()}>
                <BackIconStyled />
            </BackIconContainer>
            <Heading>
                {title}
            </Heading>
        </Container>
    );
};

export default FormHeader;
