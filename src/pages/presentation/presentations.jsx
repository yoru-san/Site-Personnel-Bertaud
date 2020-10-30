import React from "react";
import { Text, Box, Avatar } from "grommet";

const PresentationsPage = () => {

  const photoCeline = process.env.PUBLIC_URL + '/img/celine.jpg';

  return (
    <Box direction="row" justify="center" margin="xlarge">
      <Avatar src={photoCeline} size="350px" />
      <Text size="xxlarge" margin="xlarge">Céline BERTAUD</Text>
      <Text size="xxlarge" margin="xlarge">Développeuse Web</Text>
    </Box>
  );
};

export default PresentationsPage;
