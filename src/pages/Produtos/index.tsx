import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Visual } from '../../components/Visual';
import { Auditiva } from '../../components/Auditiva';
import { Maos } from '../../components/Maos';
import { Respiratoria } from '../../components/Respiratoria';
import { Impermeaveis } from '../../components/Impermeaveis';

export function Produtos() {
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
        <Paper sx={{ mt: 1 }}>
          <h2 style={{ marginLeft: '25px' }}>Proteção Auditiva</h2>
          <Grid container spacing={2} m={1} mb={10}>
            <Auditiva />
          </Grid>
        </Paper>
        <Paper sx={{ mt: 1, backgroundColor: 'rgb(247, 247, 247)' }}>
          <h2 style={{ marginLeft: '25px' }}>Proteção Para as Mãos</h2>
          <Grid container spacing={2} m={1} mb={10}>
            <Maos />
          </Grid>
        </Paper>
        <Paper sx={{ mt: 1 }}>
          <h2 style={{ marginLeft: '25px' }}>Proteção Respiratória</h2>
          <Grid container spacing={2} m={1} mb={10}>
            <Respiratoria />
          </Grid>
        </Paper>
        <Paper sx={{ mt: 1, backgroundColor: 'rgb(247, 247, 247)' }}>
          <h2 style={{ marginLeft: '25px' }}>Impermeáveis</h2>
          <Grid container spacing={2} m={1} mb={10}>
            <Impermeaveis />
          </Grid>
        </Paper>
      </Box>
      <Footer />
    </>
  );
}
