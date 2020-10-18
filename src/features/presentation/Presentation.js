import React, { useState } from 'react';
import { Text, Box } from 'grommet';

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