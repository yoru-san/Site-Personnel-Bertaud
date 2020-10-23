import React from 'react';
import { Grommet } from 'grommet';
import AppBar from './features/appBar/AppBar';
import Presentation from './features/presentation/Presentation';
import Experience from './features/experience/Experience';
import AppFooter from './features/footer/Footer';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const theme = {
  global: {
    colors: { primary: '#5A947E', secondary: 'white' },
    font: {
      family: 'Lato',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {

  return (
    <BrowserRouter>
      <Grommet theme={theme} full>
        <AppBar text="Céline BERTAUD"></AppBar>
        <Switch>
          <Route exact path="/presentation">
            <Presentation></Presentation>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/experience">
            <Experience></Experience>
          </Route>
        </Switch>
        <AppFooter></AppFooter>
      </Grommet>
    </BrowserRouter>
  );
}

export default App;
