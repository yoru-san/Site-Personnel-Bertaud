import React from "react";
import { Text, Box, Avatar, CheckBoxGroup } from "grommet";

const PresentationsPage = () => {

  const photoCeline = process.env.PUBLIC_URL + '/img/celine.jpg';

  return (
    <div>
      <Box direction="row" justify="center" margin="10%">
        <Avatar src={photoCeline} size="350px" />
        <Box direction="column" justify="center" size="xlarge" margin={{"left": "3%"}}>
            <Text color="accent" size="xxlarge">Céline BERTAUD</Text>
            <Text color="accent" size="xxlarge" margin={{"bottom": "10%"}}>Développeuse Web</Text>
            <CheckBoxGroup options={["21 ans", "Etudiante à Ynov Toulouse", "Employée chez Chausson Matériaux"]} value={["21 ans", "Etudiante à Ynov Toulouse", "Employée chez Chausson Matériaux"]} />
        </Box>
      </Box>


    </div>
  );
};

export default PresentationsPage;
