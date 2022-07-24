import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

import { keyframes, useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import useColorMode from "../../../hooks/useColorMode";
import styled from "@emotion/styled";


const pages = ["Inicio", "Sobre mim", "Projetos", "Habilidades"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];


const ReactIcon = styled(Avatar)(() => ({
  animation: 'ReactIcon 2s ease-out infinite alternate',
  '@keyframes ReactIcon': {
    'from': {
      transform: 'translateY(15%)'
     }, 
     'to': {
      transform: 'translateY(-15%)'
     } 
  }
}))

const NextIcon = styled(Avatar)(() => ({
  animation: 'NextIcon 2s ease-out 0.5s infinite alternate',
  '@keyframes NextIcon': {
    'from': {
      transform: 'translateY(15%)'
     }, 
     'to': {
      transform: 'translateY(-15%)'
     } 
  }
}))

const TSIcon = styled(Avatar)(() => ({
  animation: 'TSIcon 2s ease-out 1s infinite  alternate',
  '@keyframes TSIcon': {
    'from': {
      transform: 'translateY(15%)'
     }, 
     'to': {
      transform: 'translateY(-15%)'
     } 
  }
}))

const MaterialUIIcon = styled(Avatar)(() => ({
  animation: 'MaterialUIIcon 2s ease-out 1.5s  infinite alternate',
  '@keyframes MaterialUIIcon': {
    'from': {
      transform: 'translateY(15%)'
     }, 
     'to': {
      transform: 'translateY(-15%)'
     } 
  }
}))

const GitIcon = styled(Avatar)(() => ({
  animation: 'GitIcon 2s ease-out 2s infinite alternate',
  '@keyframes GitIcon': {
   'from': {
    transform: 'translateY(15%)'
   }, 
   'to': {
    transform: 'translateY(-15%)'
   } 
  }
}))


const ResponsiveAppBar = () => {
  const theme = useTheme();
  
  const colorMode = useColorMode();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display:'flex'}}>
            <ReactIcon alt="React" src="/react-icon.png" />
            <NextIcon alt="Next" src="/next.png" />
            <TSIcon alt="TypeScript" src="/ts.png" />
            <MaterialUIIcon alt="Material UI" src="/materialUi.png" />
            <GitIcon alt="GitHub" src="/git.png"/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexGrow: 0,
            }}
          >
            <Typography sx={{ mx: 2 }}>
              {theme.palette.mode}
              <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </Typography>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/perfil.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
