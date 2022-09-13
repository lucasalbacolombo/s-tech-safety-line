import { Navbar } from '../../components/Navbar';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Visual } from '../../components/Visual';

export function ProtecaoVisual() {
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
          <h2 style={{ marginLeft: '25px' }}>Proteção Visual</h2>
          <Grid container spacing={2} m={1} mb={10}>
            <Visual />
          </Grid>
        </Paper>
      </Box>
    </>
  );
}
