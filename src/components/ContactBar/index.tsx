import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

export function ContactBar() {
  return (
    <AppBar position='static' sx={{ backgroundColor: '#000034' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <div>(11) 95610-2777</div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
