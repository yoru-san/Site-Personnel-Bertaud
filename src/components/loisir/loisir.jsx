import React from "react";
import { Card, CardBody, Image, Box, Text } from "grommet";

const LoisirComponent = (props) => {
  return (
      <Box pad="large" align="start">
        <Card elevation="large" width="medium">
          <CardBody height="small">
            <Image
              fit="cover"
              src={props.img}
              a11yTitle="bridge"
            />
          </CardBody>
          <Box pad={{ horizontal: "medium" }} responsive={false}>
            <Text size='xlarge' margin='small'>{props.title}</Text>
          </Box>
        </Card>
      </Box>
  );
};

export default LoisirComponent;
