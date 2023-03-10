import AuthContext from "../context/AuthContext";
import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const nav = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => nav("/")}
          >
            Home
          </Typography>

          {!user ? (
            <Button color="inherit" onClick={() => nav("/login")}>
              Login
            </Button>
          ) : (
            <Grid display="flex" alignItems="center">
              <Button
                color="inherit"
                onClick={() => nav("/create-post")}
                sx={{ mr: 3 }}
              >
                Create Post
              </Button>
              <Button color="inherit" onClick={logout}>
                Logout: {user?.username}
              </Button>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
