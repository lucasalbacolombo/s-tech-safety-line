import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logo from '../../assets/images/logo.png';
import style from './style.module.scss';

export function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
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
          <Link to={'/'}>
            <img src={Logo} alt='logo' className={style.logo2} />
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            <Link to={'/'}>
              <img src={Logo} alt='logo' className={style.logo1} />
            </Link>

            <Button
              id='basic-button'
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                my: 2,
                color: 'rgb(80, 80, 80)',
                textTransform: 'none',
                fontSize: '17px',
              }}
            >
              Produtos
            </Button>
            <Menu
              id='basic-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <Link
                to={'/produtos'}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{ color: 'rgb(80, 80, 80)' }}
                >
                  Todos os Produtos
                </MenuItem>
              </Link>
              <Divider sx={{ my: 0.5 }} />
              <Link
                to={'/produtos/protecao-visual'}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{ color: 'rgb(90, 90, 90)' }}
                >
                  Proteção Visual
                </MenuItem>
              </Link>
              <Link
                to={'/produtos/protecao-auditiva'}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{ color: 'rgb(90, 90, 90)' }}
                >
                  Proteção Auditiva
                </MenuItem>
              </Link>
              <Link
                to={'/produtos/protecao-maos'}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{ color: 'rgb(90, 90, 90)' }}
                >
                  Proteção Para as Mãos
                </MenuItem>
              </Link>

              <Link
                to={'/produtos/protecao-respiratoria'}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{ color: 'rgb(90, 90, 100)' }}
                >
                  Proteção Respiratória
                </MenuItem>
              </Link>
              <Link
                to={'/produtos/impermeaveis'}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{ color: 'rgb(90, 90, 90)' }}
                >
                  Impermeáveis
                </MenuItem>
              </Link>
            </Menu>

            <Link
              to={'/contato'}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'rgb(80, 80, 80)',
                  display: 'block',
                  textTransform: 'none',
                  fontSize: '17px',
                }}
              >
                Contato
              </Button>
            </Link>
            <Link
              to={'/sobre-nos'}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'rgb(80, 80, 80)',
                  display: 'block',
                  textTransform: 'none',
                  fontSize: '17px',
                }}
              >
                Sobre Nós
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
