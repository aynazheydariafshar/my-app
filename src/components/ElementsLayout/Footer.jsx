import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { Typography } from "@mui/material";

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
    onclick: () => {},
  },
  {
    icon: <AccountCircleOutlinedIcon />,
    title: "پروفایل",
    onclick: () => {},
  },
];

const Footer = () => {
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
        {elementsFooter.map((item) => (
          <IconButton
            onClick={item.onClick}
            color="inherit"
            className="flex-col items-center hover:text-orange-500"
          >
            {item.icon}
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              {item.title}
            </Typography>
          </IconButton>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
