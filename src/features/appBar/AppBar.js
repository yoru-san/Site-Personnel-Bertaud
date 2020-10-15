import React, { useState } from 'react';
import { Header, Button, Menu, Text } from 'grommet';
import { Home } from 'grommet-icons';

const AppBar = (props) => {
    const [count, setCount] = useState(0);

    const labelsMenu = [
        { label: 'Accueil', onClick: () => { showAccueil() } },
        { label: 'Présentation', onClick: () => { showPresentation() } },
        { label: 'Expérience', onClick: () => { showExperience() } },
    ];

    function showAccueil() {
        console.log("accueil");
    }

    function showPresentation() {
        console.log("presentation");
    }

    function showExperience() {
        console.log("experience");
    }

    return (
        <Header background="primary">
            <Button icon={<Home color='secondary' />} hoverIndicator />
            <Text color='secondary'>{props.text}</Text>
            <Menu label="Menu" items={labelsMenu} color="secondary" background="secondary" />
        </Header>
    );
}

export default AppBar;