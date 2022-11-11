import { Grid } from "@mui/material";
import Footer from "components/ElementsLayout/Footer";

import Navbar from "components/ElementsLayout/Navbar";

const Layout = ({ title, children }) => {
  return (
    <Grid className="flex-col overflow-y-auto h-[650px] justify-between">
      <Navbar title={title} />
      <Grid className="flex my-3 justify-center items-center">{children}</Grid>
      <Footer />
    </Grid>
  );
};

export default Layout;
