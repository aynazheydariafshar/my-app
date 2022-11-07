import { Grid } from "@mui/material";
import Footer from "components/ElementsLayout/Footer";

import Navbar from "components/ElementsLayout/Navbar";

const Layout = ({ title, children }) => {
  return (
    <Grid className="flex-col justify-between">
      <Navbar title={title} />
      <Grid>{children}</Grid>
      <Footer />
    </Grid>
  );
};

export default Layout;
