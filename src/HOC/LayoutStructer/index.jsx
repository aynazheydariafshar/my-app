import { Grid } from "@mui/material";

import Navbar from "components/ElementsLayout/Navbar";

const LayoutStructer =
  (Component) =>
  (...props) => {
    return (
      <Grid className="flex-col justify-between">
        <Grid>
          <Navbar />
        </Grid>
        <Grid>
          <Component>{props}</Component>
        </Grid>
        <Grid></Grid>
      </Grid>
    );
  };

export default LayoutStructer;
