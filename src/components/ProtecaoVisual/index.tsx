import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import OculosRJ from '../../assets/images/rj1.jpg';
import OculosLeopardo from '../../assets/images/leopardo-incolor.jpg';
import OculosSobrepor from '../../assets/images/sobrepor.jpg';

export function ProtecaoVisual() {
  return (
    <>
      <Grid item xs={11} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='200'
            image={OculosRJ}
            alt='oculos modelo rio de janeiro'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Óculos de Proteção Modelo RJ
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>Incolor ou fumê</p>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              to={'/produtos/protecao-visual'}
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
            height='200'
            image={OculosSobrepor}
            alt='oculos modelo sobrepor'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Óculos de Proteção Modelo Sobrepor
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>Incolor ou fumê</p>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              to={'/produtos/protecao-visual'}
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
            height='200'
            image={OculosLeopardo}
            alt='oculos modelo leopardo'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Óculos de Proteção Modelo Leopardo
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>Incolor ou fumê</p>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              to={'/produtos/protecao-visual'}
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
