import React from 'react';
import { Grommet, Header, Button, Menu } from 'grommet';
import AppBar from './features/appBar/AppBar';

const theme = {
  global: {
    colors: { primary: '#5A947E', secondary: 'white' },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {

  return (
    <Grommet theme={theme} >
      <AppBar text="Céline BERTAUD"></AppBar>
    </Grommet>
  );
}

export default App;
