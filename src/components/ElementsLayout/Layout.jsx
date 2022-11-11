import { Grid } from "@mui/material";
import Footer from "components/ElementsLayout/Footer";

import Navbar from "components/ElementsLayout/Navbar";

const Layout = ({ title, children }) => {
  return (
    <Grid className="flex-col h-screen justify-between">
      <Navbar title={title} />
      <Grid className="flex py-11 overflow-y-auto justify-center items-center">{children}</Grid>
      <Footer />
    </Grid>
  );
};

export default Layout;
