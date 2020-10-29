import React, { useState } from "react";
import { Header, Button, Text, ResponsiveContext } from "grommet";
import { Home } from "grommet-icons";
import { Link } from "react-router-dom";
import "./appBar.css";

const AppBar = (props) => {
  const size = React.useContext(ResponsiveContext);

  //gestion du responsive
  return (
    <Header background="primary" align="center">
      <Link to="presentation">
        <Button icon={<Home color="secondary" />} hoverIndicator />
      </Link>
      <Link to="competences">
        <Button color="secondary">Compétences</Button>
      </Link>
      <Link to="experience">
        <Button color="secondary">Expérience</Button>
      </Link>
      <Link to="loisirs">
        <Button color="secondary">Loisirs</Button>
      </Link>
      <Text color="secondary">{props.text}</Text>
    </Header>
  );
};

export default AppBar;
