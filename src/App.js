import React from 'react';
import { Grommet, Header, Button, Menu } from 'grommet';
import { Home } from 'grommet-icons';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {

  return (
    <Grommet theme={theme}>
      <Header background="brand">
        <Button icon={<Home />} hoverIndicator />
        <Menu label="Accueil" items={[{ label: 'Présentation' }]} />
      </Header>
    </Grommet>
  );
}

export default App;
