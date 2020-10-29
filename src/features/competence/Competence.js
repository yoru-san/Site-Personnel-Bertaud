import React from "react";
import { Text, Box, Meter, Stack } from "grommet";
import "../competences/competences.css";

const Competence = (props) => {
  const pourcentage = props.pourcentage;
  const pourcentageManquant = 100 - props.pourcentage;

  return (
    <div class="competence">
      <Stack anchor="center">
        <Meter
          type="circle"
          background="light-2"
          values={[
            {
              value: pourcentage,
              color: "primary",
            },
            {
              value: pourcentageManquant,
              color: "accent",
            },
          ]}
          max={100}
          size="small"
          thickness="medium"
        />
        <Box align="center">
          <Box direction="row" align="center" pad={{ bottom: "xsmall" }}>
            <Text size="xlarge" weight="bold">
              {props.title}
            </Text>
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default Competence;
