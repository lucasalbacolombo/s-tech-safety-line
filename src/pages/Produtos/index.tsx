import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
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
          <Typography
            gutterBottom
            component='h1'
            sx={{
              fontSize: '25px !important',
              fontWeight: 'bold',
              ml: '30px',
              mt: '25px',
            }}
          >
            Proteção Visual
          </Typography>
          <Grid container spacing={2} m={0.5} mb={10}>
            <Visual />
          </Grid>
        </Paper>
        <Paper sx={{ mt: 1 }}>
          <Typography
            gutterBottom
            component='h1'
            sx={{
              fontSize: '25px !important',
              fontWeight: 'bold',
              ml: '30px',
              mt: '25px',
            }}
          >
            Proteção Auditiva
          </Typography>
          <Grid container spacing={2} ml={1} mb={10}>
            <Auditiva />
          </Grid>
        </Paper>
        <Paper sx={{ mt: 1, backgroundColor: 'rgb(247, 247, 247)' }}>
          <Typography
            gutterBottom
            component='h1'
            sx={{
              fontSize: '25px !important',
              fontWeight: 'bold',
              ml: '30px',
              mt: '25px',
            }}
          >
            Proteção Para as Mãos
          </Typography>
          <Grid container spacing={2} ml={1} mb={10}>
            <Maos />
          </Grid>
        </Paper>
        <Paper sx={{ mt: 1 }}>
          <Typography
            gutterBottom
            component='h1'
            sx={{
              fontSize: '25px !important',
              fontWeight: 'bold',
              ml: '30px',
              mt: '25px',
            }}
          >
            Proteção Respiratória
          </Typography>
          <Grid container spacing={2} ml={1} mb={10}>
            <Respiratoria />
          </Grid>
        </Paper>
        <Paper sx={{ mt: 1, backgroundColor: 'rgb(247, 247, 247)' }}>
          <Typography
            gutterBottom
            component='h1'
            sx={{
              fontSize: '25px !important',
              fontWeight: 'bold',
              ml: '30px',
              mt: '25px',
            }}
          >
            Impermeáveis
          </Typography>
          <Grid container spacing={2} ml={1} mb={10}>
            <Impermeaveis />
          </Grid>
        </Paper>
      </Box>
      <Footer />
    </>
  );
}
