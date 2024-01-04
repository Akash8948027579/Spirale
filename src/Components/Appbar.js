import { useState }  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import img from './Assets/spiraleinfosoft.png'

const pages = ['Home', 'About', 'Technologies', 'Services', 'Career', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Appbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar elevation={0} position="fixed" sx={{paddingTop:'20px', backgroundColor:'white'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >
          <img src={img} alt='' width={'100%'} height={'100%'}/>
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{color: '#2699F3', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Box
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            
            }}
          >
            <img src={img} alt='' width={'150px'} height={'100%'}/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', }, justifyContent:'center' }}>
          <Box sx={{display:'flex', flexDirection:'row', gap:'30px', }}>
          <Typography sx={{color: '#2699F3', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700',  wordWrap: 'break-word'}} >Home</Typography>
            <Typography sx={{color: '#58595B', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700',  wordWrap: 'break-word'}}>About</Typography>
            <Typography sx={{color: '#58595B', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700',  wordWrap: 'break-word'}}>Technologies</Typography>
            <Typography sx={{color: '#58595B', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Services</Typography>
            <Typography sx={{color: '#58595B', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700',  wordWrap: 'break-word'}}>Career</Typography>
            <Typography sx={{color: '#58595B', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700',  wordWrap: 'break-word'}}>Contacts</Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Box sx={{backgroundColor: '#2699F3', borderRadius: 40,width:'103px', height:'41px',  justifyContent:'space-around'}}>
<Typography sx={{textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Source Sans Pro', fontWeight: '700', lineHeight: 3.22, wordWrap: 'break-word'}}>Get a quote</Typography>
</Box>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
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
}
export default Appbar;