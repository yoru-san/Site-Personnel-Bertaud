import React from "react";
import { Card, CardHeader, CardBody, Image, Box, Text } from "grommet";
import "../loisir/loisir.css";

const Loisir = (props) => {
  return (
    <div class="loisir">
      <Box pad="medium" align="start">
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
    </div>
  );
};

export default Loisir;
