import { Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { FOREIGN, PROFILE } from "constant";

const useStyles = makeStyles({
  root: {
    "& button[aria-selected='true']": {
      backgroundColor: "gray",
      color: "white",
      borderRadius: "20px",
    },
  },
});

const TabsCompany = () => {
  const [value, setValue] = useState(PROFILE);
  const classes = useStyles();
  let location = useLocation();
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/${newValue}`);
  };

  //when toggle link change Tab
  React.useEffect(() => {
    return location.pathname === `/${PROFILE}`
      ? setValue(PROFILE)
      : setValue(FOREIGN);
  }, [location]);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Tabs
      className={`${classes.root} rounded-[10px] p-1 border border-[gray] my-5`}
      style={{
        "& button[aria-selected='true']": {
          backgroundColor: "gray",
          color: "white",
        },
      }}
      value={value}
      onChange={handleChange}
      TabIndicatorProps={{
        style: {
          display: "none",
        },
      }}
    >
      <Tab
        className={`text-base font-bold rounded w-1/2`}
        {...a11yProps(0)}
        label="شرکت ایرانی"
        value={PROFILE}
      />
      <Tab
        className={`text-base font-bold rounded w-1/2`}
        {...a11yProps(1)}
        label="نماینده شرکت خارجی"
        value={FOREIGN}
      />
    </Tabs>
  );
};

export default TabsCompany;
