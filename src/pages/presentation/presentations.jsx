import React from "react";
import { Text, Box, Avatar } from "grommet";

const PresentationsPage = (props) => {

  const celine = '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';

  return (
    <div className="presentation">
      <Box direction="row" gap="small">
        <Avatar src={celine} size="xlarge" />
      </Box>
      <Box>
        <Text>Céline BERTAUD</Text>
        <Text>Master 2 Expert Développement Web</Text>
      </Box>
    </div>
  );
};

export default PresentationsPage;
