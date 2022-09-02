import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import LuvaMalha from '../../assets/images/luva-mesclada.jpg';
import LuvaRaspa from '../../assets/images/luva-raspa.png';
import LuvaLatex from '../../assets/images/luva-latex.png';
import LuvaVaqueta from '../../assets/images/luva.jpg';

export function ProtecaoMaos() {
  return (
    <>
      <Grid item xs={11} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='300'
            image={LuvaMalha}
            alt='luvas de malha'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Luvas de Malha Tricotadas
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>Com ou sem pigmento</p>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              to={'/produtos/protecao-maos'}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Button size='small'>Saiba Mais</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={11} sm={6} md={3}>
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
          <CardActions>
            <Link
              to={'/produtos/protecao-maos'}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Button size='small'>Saiba Mais</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={11} sm={6} md={4}>
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
          <CardActions>
            <Link
              to={'/produtos/protecao-maos'}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Button size='small'>Saiba Mais</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={11} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='300'
            image={LuvaVaqueta}
            alt='luva vaqueta'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Luvas de Vaqueta Mista Tipo Petroleira
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              to={'/produtos/protecao-maos'}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Button size='small'>Saiba Mais</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
