import React, { useState } from "react";
import { Box, Text, Stack, Diagram } from "grommet";

const Experience = (props) => {
  const [count, setCount] = useState(0);

  return (
    <Box align="center">
      <Box pad="large">
        <Stack guidingChild={1}>
          <Diagram
            connections={[
              {
                fromTarget: "1",
                toTarget: "2",
                thickness: "xsmall",
                color: "primary",
              },
              {
                fromTarget: "2",
                toTarget: "3",
                thickness: "xsmall",
                color: "primary",
                type: "rectilinear",
              },
              {
                fromTarget: "3",
                toTarget: "4",
                thickness: "xsmall",
                color: "primary",
                type: "rectilinear",
              },
              {
                fromTarget: "4",
                toTarget: "5",
                thickness: "xsmall",
                color: "primary",
                type: "rectilinear",
              },
            ]}
          />
          <Box>
            <Box direction="column">
              <Box
                id="1"
                height="small"
                width="small"
                margin="small"
                pad="medium"
                background="light-3"
                border={{ size: "medium", color: "primary" }}
              >
                <Text>Bac Economique et social, mention Bien.</Text>
              </Box>
              <Box
                id="2"
                height="small"
                width="small"
                margin="small"
                pad="medium"
                background="light-3"
                border={{ size: "medium", color: "primary" }}
              >
                <Text>Entrée à Ynov.</Text>
              </Box>

              <Box
                id="3"
                height="small"
                width="small"
                margin="small"
                pad="medium"
                background="light-3"
                border={{ size: "medium", color: "primary" }}
              >
                <Text>Entrée à Ynov.</Text>
              </Box>
              <Box
                id="4"
                height="small"
                width="small"
                margin="small"
                pad="medium"
                background="light-3"
                border={{ size: "medium", color: "primary" }}
              >
                <Text>Entrée à Ynov.</Text>
              </Box>
              <Box
                id="5"
                height="small"
                width="small"
                margin="small"
                pad="medium"
                background="light-3"
                border={{ size: "medium", color: "primary" }}
              >
                <Text>Entrée à Ynov.</Text>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Experience;
