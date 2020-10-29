import React from "react";
import { Text, Box } from "grommet";
import Loisir from "../../components/loisir";
import "./loisirs.css";

const LoisirsPage = () => {
  return (
    <div class="loisirs">
      <Text size="xxlarge" color="accent">Mes loisirs</Text>
      <Box direction="row" justify="center" align="center">
        <Loisir
          title="L'équitation"
          img="//images.lpcdn.ca/924x615/201608/24/1250631-poney-clubs-ecoles-equitation-autres.jpg"
        ></Loisir>
        <Loisir
          title="L'escalade"
          img="//www.slate.fr/sites/default/files/styles/1680x840/public/escalade.jpg"
        ></Loisir>
        <Loisir
          title="La lecture"
          img="//france3-regions.francetvinfo.fr/image/qKSRhbJH9Rj-agcqIEqXTjFlQeE/1200x900/regions/2020/06/09/5edf6e0648d98_nuit_de_la_lecture-4042071.jpg"
        ></Loisir>
      </Box>
    </div>
  );
};

export default LoisirsPage;
