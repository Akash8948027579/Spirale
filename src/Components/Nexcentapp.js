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
import img from './Assets/NIcon.png'
import img1 from './Assets/Nexcent.png'

const pages = ['Home', 'Service', 'Feature', 'Product', 'Testimonial', 'FAQ'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Nexcentapp() {
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
    <AppBar elevation={0} position="fixed" sx={{paddingTop:'0px', backgroundColor:'#F5F7FA'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >
          <Box sx={{width:'35px', height:'24px', mr:1}}> <img src={img} alt='' width={'100%'} height={'100%'}/></Box>
          <Box sx={{width:'112px', height:'21px'}}> <img src={img1} alt='' width={'100%'} height={'100%'}/></Box>
          
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
                  <Typography sx={{color: '#18191F', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}} textAlign="center">{page}</Typography>
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
            <Box sx={{width:'35px', height:'24px', mr:1}}> <img src={img} alt='' width={'100%'} height={'100%'}/></Box>
          <Box sx={{width:'112px', height:'21px'}}> <img src={img1} alt='' width={'100%'} height={'100%'}/></Box>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', }, justifyContent:'center' }}>
          <Box sx={{display:'flex', flexDirection:'row', gap:'30px', }}>
          <Typography sx={{color: '#18191F', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}} textAlign="center">Home</Typography>
          <Typography sx={{color: '#18191F', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}} textAlign="center">Service</Typography>
          <Typography sx={{color: '#18191F', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}} textAlign="center">Feature</Typography>
          <Typography sx={{color: '#18191F', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}} textAlign="center">Product</Typography>
          <Typography sx={{color: '#18191F', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}} textAlign="center">Testimonial</Typography>
          <Typography sx={{color: '#18191F', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}} textAlign="center">FAQ</Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Box sx={{width:'182px', height:'40px', mt:1}}>
<Button sx={{ color: '#4CAF4F', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word', textAlign:'center', mr:2}}>Login</Button>

<Button sx={{backgroundColor:'#4CAF4F', color:'white', fontFamily:'Inter', fontWeight:500, textAlign:'center'}}>Sign Up</Button>
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
export default Nexcentapp;