import React from "react";
import { Footer, Text } from "grommet";
import "./footer.css";

const FooterComponent = () => {
  return (
    <div class="footer">
      <Footer background="primary" pad="medium">
        <Text color="secondary">Copyright 2020</Text>
      </Footer>
    </div>
  );
};

export default FooterComponent;
