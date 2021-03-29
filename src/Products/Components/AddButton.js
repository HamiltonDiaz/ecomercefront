import React from 'react';
import {Section, Container, Button} from 'react-bulma-components'

const AddButton = () => {
    return (
        <Section>
            <Container>
                <Button className="button is-primary"> Enviar </Button>
            </Container>
        </Section>
    );
};

export default AddButton;