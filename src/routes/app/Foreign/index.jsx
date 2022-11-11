import { Box } from "@mui/material";
import React from "react";
import PersonPinIcon from "@mui/icons-material/PersonPin";

import TabsCompany from "../Profile/TabsCompany";
import Layout from "components/ElementsLayout/Layout";

const Foreign = () => {
  return (
    <Layout title="پروفایل">
      <Box className="flex flex-col justify-center items-center">
        <PersonPinIcon fontSize="large" />
        <TabsCompany />
      </Box>
    </Layout>
  );
};

export default Foreign;
