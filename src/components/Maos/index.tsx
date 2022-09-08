import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import LuvaMalha from '../../assets/images/luva-mesclada.jpg';
import LuvaRaspa from '../../assets/images/luva-raspa.png';
import LuvaLatex from '../../assets/images/luva-latex.png';
import LuvaVaqueta from '../../assets/images/luva.jpg';
import SemPigmento from '../../assets/images/malha-sem-pigmento.jpeg';
import ComPigmento from '../../assets/images/com-pigmento.jpeg';

export function Maos() {
  return (
    <>
      <Grid item xs={11} sm={6} md={5}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='300'
            image={LuvaMalha}
            alt='luvas de malha'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Luvas de Malha Tricotadas 4 Fios Mescladas
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={11} sm={6} md={5}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='300'
            image={ComPigmento}
            alt='luvas de malha'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Luvas de Malha Tricotadas 4 Fios Mescladas com Pigmento
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={11} sm={6} md={5}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='300'
            image={SemPigmento}
            alt='luva vaqueta'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Luvas de Malha Tricotadas 4 Fios Brancas
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={11} sm={6} md={5}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='300'
            image={LuvaVaqueta}
            alt='luva vaqueta'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Luvas de Malha Tricotadas 4 Fios Brancas com Pigmento
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={11} sm={6} md={5}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='300'
            image={LuvaRaspa}
            alt='luvas raspa'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Luvas de Raspa P/7 - P/15 - P/20
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={11} sm={6} md={5}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='300'
            image={LuvaLatex}
            alt='luvas latex'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Luvas de Látex Forradas
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>Tamanhos P, M, G, GG</p>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
