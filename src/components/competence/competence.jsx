import React from "react";
import { Text, Box, Meter, Stack } from "grommet";

const CompetenceComponent = (props) => {
  const pourcentage = props.pourcentage;
  const pourcentageManquant = 100 - props.pourcentage;

  return (
    <div class="competence">
      <Box margin={{"top":"10%", "bottom":"10%", "right":"8%", "left":"8%"}} animation={{"type": "jiggle", "duration":"700"}}>
      <Stack anchor="center">
        <Meter
          type="circle"
          background="light-2"
          values={[
            {
              value: pourcentage,
              color: "accent",
            },
            {
              value: pourcentageManquant,
              color: "light-3",
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
      </Box>
    </div>
  );
};

export default CompetenceComponent;
