import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Respiratoria } from '../../components/Respiratoria';

export function ProtecaoRespiratoria() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            width: '100%',
          },
        }}
      >
        <Paper sx={{ mt: 1, backgroundColor: 'rgb(247, 247, 247)' }}>
          <h2 style={{ marginLeft: '25px' }}>Proteção Respiratória</h2>
          <Grid container spacing={2} m={1} mb={10}>
            <Respiratoria />
          </Grid>
        </Paper>
      </Box>
      <Footer />
    </>
  );
}
