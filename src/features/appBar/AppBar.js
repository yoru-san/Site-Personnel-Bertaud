import React, { useState } from "react";
import { Header, Button, Text, Anchor, ResponsiveContext } from "grommet";
import { Home } from "grommet-icons";
import { Link } from "react-router-dom";
import "./appBar.css";

const AppBar = (props) => {
  const [count, setCount] = useState(0);
  const size = React.useContext(ResponsiveContext);

  //gestion du responsive
  return (
    <>
      {size === "small" ? (
        <Header background="secondary" align="center">
          <Button icon={<Home color="secondary" />} hoverIndicator />
          <Link to="/">Accueil</Link>
          <Link to="presentation">Présentation</Link>
          <Link to="experience">Expérience</Link>
          <Text color="secondary">{props.text}</Text>
        </Header>
      ) : (
        <Header background="primary" align="center">
          <Button icon={<Home color="secondary" />} hoverIndicator />
          <Link to="/">
            <Button color="secondary">Accueil</Button>
          </Link>
          <Link to="presentation">
            <Button color="secondary">Présentation</Button>
          </Link>
          <Link to="experience">
            <Button color="secondary">Expérience</Button>
          </Link>
          <Text color="secondary">{props.text}</Text>
        </Header>
      )}
    </>
  );
};

export default AppBar;
