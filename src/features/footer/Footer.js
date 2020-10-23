import React, { useState } from "react";
import { Anchor, Footer, Text, ResponsiveContext } from "grommet";
import "./footer.css";

const AppFooter = (props) => {
  const [count, setCount] = useState(0);
  const size = React.useContext(ResponsiveContext);

  //gestion du responsive
  return (
    <Footer background="primary" pad="medium">
      <Text color="secondary">Copyright Céline BERTAUD, 2020</Text>
    </Footer>
  );
};

export default AppFooter;
