import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Home, KeyboardArrowLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Navbar({title}) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "rgb(214, 220, 227)", color: "black" , borderBottomLeftRadius : "40px" , borderBottomRightRadius : "40px"}}
      >
        <Toolbar className="justify-between items-center">
          <IconButton onClick={() => navigate("/")} className="hover:text-blue-500" size="large" color="inherit">
            <Home />
          </IconButton>
          <Box>
            <Typography variant="h6" component="div" sx={{fontWeight  :"bold"}}>
              {title}
            </Typography>
          </Box>
          <IconButton className="hover:text-blue-500" onClick={handleBackClick} size="large" color="inherit">
            <KeyboardArrowLeft />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
