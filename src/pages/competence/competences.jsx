import React from "react";
import { Text, Box } from "grommet";
import Competence from '../../components/competence';

const CompetencesPage = () => {
  return (
    <Box margin={{ "top": "2%" }}>
      <Text textAlign="center" size="xxlarge" color="accent">
        Mes compétences
      </Text>
      <Box align="center" pad="large">
        <Text size="xxlarge">Framework front</Text>
        <Box direction="row" pad="small">
          <Competence
            class="competence"
            title="Angular"
            pourcentage="70"
          ></Competence>
          <Competence
            class="competence"
            title="React"
            pourcentage="20"
          ></Competence>
          <Competence
            class="competence"
            title="Vue"
            pourcentage="10"
          ></Competence>
        </Box>

        <Text size="xxlarge">Langage back</Text>
        <Box direction="row" pad="small">
          <Competence
            class="competence"
            title="C#"
            pourcentage="80"
          ></Competence>
          <Competence
            class="competence"
            title="NodeJS"
            pourcentage="50"
          ></Competence>
          <Competence
            class="competence"
            title="PHP"
            pourcentage="20"
          ></Competence>
        </Box>

        <Text size="xxlarge">Base de données</Text>
        <Box direction="row" pad="small">
          <Competence
            class="competence"
            title="SQL Server"
            pourcentage="60"
          ></Competence>
          <Competence
            class="competence"
            title="MongoDB"
            pourcentage="40"
          ></Competence>
          <Competence
            class="competence"
            title="Cassandra"
            pourcentage="15"
          ></Competence>
        </Box>
      </Box>
    </Box>
  );
};

export default CompetencesPage;
