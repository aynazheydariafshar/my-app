import AppBar from "@mui/material/AppBar";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import {
  Tab,
  Tabs,
} from "@mui/material";
import * as React from "react";
import { useLocation, useNavigate } from "react-router";

import { APP_ROUTE, PROFILE } from "constant";

const Footer = () => {
  const [value, setValue] = React.useState(APP_ROUTE);
  const navigate = useNavigate();
  const location = useLocation();

  const elementsFooter = [
    {
      icon: <TextsmsOutlinedIcon />,
      title: "پیام ها",
      value: "messages",
    },
    {
      icon: <QueryBuilderOutlinedIcon />,
      title: "فعالیت های اخیر",
      value: "actions",
    },
    {
      icon: <ArticleOutlinedIcon />,
      title: "سفارش ها",
      value: APP_ROUTE,
    },
    {
      icon: <AccountCircleOutlinedIcon />,
      title: "پروفایل",
      value: PROFILE,
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`${newValue}`);
  };

  //when toggle link change Tab
  React.useEffect(() => {
    return location.pathname === `${APP_ROUTE}`
      ? setValue(APP_ROUTE)
      : setValue(PROFILE);
  }, [location]);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgb(214, 220, 227)",
        color: "black",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        top: "auto",
        bottom: 0,
      }}
    >
      <Tabs
        sx={{
          backgroundColor: "inherit",
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
        }}
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
      >
        {elementsFooter.map((item, index) => (
          <Tab
            className={`text-base font-bold rounded w-1/2`}
            {...a11yProps(index)}
            value={item.value}
            label={item.title}
            icon={item.icon}
          />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default Footer;
