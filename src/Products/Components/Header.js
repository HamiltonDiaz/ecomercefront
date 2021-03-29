import React from 'react';
import {Section, Container} from 'react-bulma-components'

const Header = ({titulo}) => {
    return (
        <Section>
            <Container>
                <h1 className="title has-text-centered" >{titulo}</h1>
            </Container>
        </Section>
    );
};


export default Header;