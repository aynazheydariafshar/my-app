import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { Typography } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router";
import { PROFILE } from "constant";

const Footer = () => {
  const [value, setValue] = React.useState(2);
  const navigate = useNavigate();
  
  const elementsFooter = [
    {
      icon: <TextsmsOutlinedIcon />,
      title: "پیام ها",
      onclick: () => {},
    },
    {
      icon: <QueryBuilderOutlinedIcon />,
      title: "فعالیت های اخیر",
      onclick: () => {},
    },
    {
      icon: <ArticleOutlinedIcon />,
      title: "سفارش ها",
      onclick: () => {
        navigate(`/`);
        setValue(2);
      },
    },
    {
      icon: <AccountCircleOutlinedIcon />,
      title: "پروفایل",
      onclick: () => {
        navigate(`/${PROFILE}`);
        setValue(3);
      },
    },
  ];
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
      <Toolbar className="flex justify-around items-center">
        {elementsFooter.map((item, index) => (
          <IconButton
            onClick={item.onclick}
            sx={{ color: value === index ? "orange" : "inherit" }}
            className="flex-col items-center hover:text-orange-500"
          >
            {item.icon}
            <Typography sx={{ fontWeight: "bold" }} variant="body2">
              {item.title}
            </Typography>
          </IconButton>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
