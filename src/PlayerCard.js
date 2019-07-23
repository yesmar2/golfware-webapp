import React from 'react';
import styled from 'styled-components'
import Paper from './Paper';
import Entry from './Entry';
import data from './data.json';

const Container = styled(Paper)`
    display: flex;
    align-items: center;
    height: 56px;
`;

const Handicap = styled.div`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center
    margin-right: ${props => props.theme.spacingMedium};
    background: ${props => props.theme.colors.green}; 
    color: #fff;
    height: ${props => props.theme.spacingHuge};
    width: ${props => props.theme.spacingHuge};
`;

const Name = styled.div`
    flex: 1;
    margin-left: ${props => props.theme.spacingMedium};
`;

class PlayerCard extends React.Component {
    onClick = () => {
        console.log("clicked");
    }

    render() {
        const { name, handicap, className } = this.props;

        return (
            <Container
                className={className}
                onClick={this.onClick}>
                <Name>
                    {name}
                </Name>
                <Handicap>
                    {handicap}
                </Handicap>
                {/* <Entry />
                <Entry />
                <Entry />
                <Entry />
                <Entry />
                <Entry />
                <Entry />
                <Entry />
                <Entry />
                <Entry /> */}
            </Container>
        );
    }
}

export default PlayerCard;