import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/images/logo.png';
import style from './style.module.scss';

export function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static' sx={{ backgroundColor: 'white' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
              sx={{ color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                color: 'black',
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} sx={{ color: 'black' }}>
                <Typography textAlign='center'>PRODUTOS</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{ color: 'black' }}>
                <Typography textAlign='center'>CONTATO</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{ color: 'black' }}>
                <Typography textAlign='center'>SOBRE NÓS</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <img src={Logo} alt='logo' className={style.logo2} />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            <img src={Logo} alt='logo' className={style.logo1} />
            <Button
              sx={{ my: 2, color: 'black', display: 'block', height: '38px' }}
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              onMouseOver={handleClick}
            >
              Produtos
            </Button>
            <Menu
              id='basic-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem onClick={handleClose}>Proteção Visual</MenuItem>
              <MenuItem onClick={handleClose}>Proteção Auditiva</MenuItem>
              <MenuItem onClick={handleClose}>Proteção Para as Mãos</MenuItem>
              <MenuItem onClick={handleClose}>Proteção Respiratória</MenuItem>
              <MenuItem onClick={handleClose}>Impermeáveis</MenuItem>
            </Menu>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              Contato
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              Sobre Nós
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
