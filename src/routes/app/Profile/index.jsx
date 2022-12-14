import { Box } from "@mui/material";
import PersonPinIcon from "@mui/icons-material/PersonPin";

import Layout from "components/ElementsLayout/Layout";
import FormProfile from "./FormProfile";
import TabsCompany from "./TabsCompany";

const Profile = () => {
  return (
    <Layout title="پروفایل">
      <Box className="flex flex-col justify-center items-center">
        <PersonPinIcon fontSize="large"/>
        <TabsCompany />
        <FormProfile />
      </Box>
    </Layout>
  );
};

export default Profile;
