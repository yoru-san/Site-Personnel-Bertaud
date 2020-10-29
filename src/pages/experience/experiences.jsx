import React from "react";
import { Box, Text, Stack, Diagram } from "grommet";
import './experiences.css';

const ExperiencesPage = () => {
  return (
    <div class="experience">
    <Box align="center">
      <Text color="accent" size="xxlarge">Mon expérience</Text>
      <Box pad="large" align="center">
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
              {
                fromTarget: "5",
                toTarget: "6",
                thickness: "xsmall",
                color: "primary",
                type: "rectilinear",
              },
              {
                fromTarget: "6",
                toTarget: "7",
                thickness: "xsmall",
                color: "primary",
                type: "rectilinear",
              },
              {
                fromTarget: "7",
                toTarget: "8",
                thickness: "xsmall",
                color: "black",
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
                <Text>
                  2016 : Obtention du Bac Economique et social, mention Bien.
                </Text>
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
                <Text>2016 : Entrée à Ynov Toulouse.</Text>
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
                <Text>
                  Juillet 2017 : Stage chez Pinterac (Développeur Web)
                  Junior.
                </Text>
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
                <Text>
                  Juillet 2018 : Stage chez Chausson Matériaux (Développeur Fullstack Junior).
                </Text>
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
                <Text align="center">
                  2018 : Obtention du Bachelor Informatique et Systèmes
                  d'Information chez Ynov.
                </Text>
              </Box>
              <Box
                id="6"
                height="small"
                width="small"
                margin="small"
                pad="medium"
                background="light-3"
                border={{ size: "medium", color: "primary" }}
              >
                <Text>2018 : Début d'alternance chez Chausson Matériaux.</Text>
              </Box>
              <Box
                id="7"
                height="small"
                width="small"
                margin="small"
                pad="medium"
                background="light-3"
                border={{ size: "medium", color: "primary" }}
              >
                <Text>2019 : Entrée en Master chez Ynov Toulouse.</Text>
              </Box>
              <Box
                id="8"
                height="small"
                width="small"
                margin="small"
                pad="medium"
                background="light-3"
                border={{ size: "medium", color: "black" }}
              >
                <Text>2021 : Obtention du Master Expert Developpement Web chez Ynov Toulouse.</Text>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
    </div>
  );
};

export default ExperiencesPage;
