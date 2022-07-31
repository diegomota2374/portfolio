

import { Settings } from 'src/@core/context/settingsContext'

import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'

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
import styled from "@emotion/styled";

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const pages = ["Inicio", "Sobre mim", "Projetos", "Habilidades"];
const settingss = ["Profile", "Account", "Dashboard", "Logout"];


const ReactIcon = styled(Avatar)(() => ({
  padding:'4px',
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
  padding:'4px',
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
  padding:'4px',
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
  padding:'4px',
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
  padding:'4px',
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


const ResponsiveAppBar = (props: Props) => {
 // ** Props
 const {  settings, saveSettings } = props

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
            <ReactIcon alt="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <NextIcon alt="Next" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" />
            <TSIcon alt="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
            <MaterialUIIcon alt="Material UI" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
            <GitIcon alt="GitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"/>
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

        <ModeToggler settings={settings} saveSettings={saveSettings} />


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
              {settingss.map((setting) => (
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

