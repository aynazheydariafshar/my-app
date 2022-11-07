import { Grid } from "@mui/material";
import Footer from "components/ElementsLayout/Footer";

import Navbar from "components/ElementsLayout/Navbar";

const LayoutStructer =
  (Component) =>
  (...props) => {
    return (
      <Grid className="flex-col justify-between">
          <Navbar />
        <Grid>
          <Component>{props}</Component>
        </Grid>
        <Footer />
      </Grid>
    );
  };

export default LayoutStructer;
