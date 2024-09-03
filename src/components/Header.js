import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Drawer } from '@mui/material';
import { Button, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = useMediaQuery('(max-width:764px)');

  const handleDrawerOpenClose = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Box sx={{ textAlign: 'center', display: 'flex', padding: '15px', alignItems: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, marginLeft: '20px' }}>
        Astrology API
      </Typography>
      <Divider sx={{ flexGrow: 1, border: 'none' }} />
      
      {isMobile ? (
        <>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleDrawerOpenClose}
            sx={{ marginLeft: 'auto' }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer open={openDrawer} anchor='right' onClose={handleDrawerOpenClose} sx={{width : 350 }}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleDrawerOpenClose}
              sx={{ marginLeft: 'auto' , paddingRight: '20px' }}
            >
              <CloseIcon />
            </IconButton>
            <ListItem >Products</ListItem>
            <ListItem>Solutions</ListItem>
            <ListItem >Pricing</ListItem>
            <ListItem >Doc</ListItem>
            <ListItem >Login</ListItem>
            <ListItem>
              <Button variant="contained" sx={{ width: '100%' }}>Get Started</Button>
            </ListItem>
          </Drawer>
        </>
      ) : (
        <List sx={{ display: 'flex' }}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary='Products' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary='Solutions' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary='Pricing' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary='Doc' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary='Login' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <Button variant="contained" sx={{ textWrap: 'nowrap', padding: '10px' }}>Get Started</Button>
          </ListItem>
        </List>
      )}
    </Box>
  );
}

export default Header;
