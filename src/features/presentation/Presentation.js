import React, { useState } from 'react';
import { Header, Button, Menu, Text, Box } from 'grommet';
import { Home, Test } from 'grommet-icons';

const Presentation = (props) => {
    const [count, setCount] = useState(0);

    return (
        <Box>
            <Text>Je suis Céline BERTAUD</Text>
            <Text>Master 2 Expert Développement Web</Text>
        </Box>
    );
}

export default Presentation;