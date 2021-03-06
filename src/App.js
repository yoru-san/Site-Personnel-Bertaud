import React from 'react';
import { Grommet } from 'grommet';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LoisirPage from './pages/loisir/loisirs';
import Competences from './pages/competence/competences';
import Presentation from './pages/presentation/presentations';
import Experience from './pages/experience/experiences';
import AppBar from './components/app-bar';
import FooterComponent from './components/footer';

const theme = {
  global: {
    focus: {
      shadow: {
        size: "0px"
      }
    },
    colors: { primary: '#4c548e', secondary: 'white', accent: '#ff90b0' },
    font: {
      family: 'Lato',
      size: '18px',
      height: '20px',
    },
  },
  checkBox: {
    color: "accent",
    hover: {
      border: {
        color: "accent",
      }
    }
  }
};

function App() {

  return (
    <BrowserRouter>
      <Grommet theme={theme} full flex>
        <AppBar text="Céline BERTAUD"></AppBar>

        <Switch>
          <Route exact path="/">
            <Presentation></Presentation>
          </Route>
          <Route exact path="/presentation">
            <Presentation></Presentation>
          </Route>
          <Route exact path="/competences">
            <Competences></Competences>
          </Route>
          <Route exact path="/loisirs">
            <LoisirPage></LoisirPage>
          </Route>
          <Route exact path="/experience">
            <Experience></Experience>
          </Route>
        </Switch>
        <FooterComponent></FooterComponent>
      </Grommet>
    </BrowserRouter>
  );
}

export default App;
