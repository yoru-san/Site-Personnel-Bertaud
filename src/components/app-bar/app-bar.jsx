import React from "react";
import { Header, Button, Text } from "grommet";
import { Home } from "grommet-icons";
import { Link } from "react-router-dom";

const AppBar = (props) => {

  return (
    <Header background="primary" align="center" pad={{ "right": "1%", "left": "1%" }} height="7%">
      < Link to="presentation" >
        <Button icon={<Home color="secondary" />} hoverIndicator="background" />
      </Link >
      <Link to="competences">
        <Button color="secondary" hoverIndicator="background">Compétences</Button>
      </Link>
      <Link to="experience">
        <Button color="secondary" hoverIndicator="background">Expérience</Button>
      </Link>
      <Link to="loisirs">
        <Button color="secondary" hoverIndicator="background">Loisirs</Button>
      </Link>
      <Text color="secondary">{props.text}</Text>
    </Header >
  );
};

export default AppBar;
