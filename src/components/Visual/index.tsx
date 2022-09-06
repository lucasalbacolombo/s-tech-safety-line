import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import OculosRJ from '../../assets/images/rj1.jpg';
import OculosRJFume from '../../assets/images/rj-fume.jpg';
import OculosLeopardo from '../../assets/images/leopardo-incolor.jpg';
import OculosSobrepor from '../../assets/images/sobrepor.jpg';
import SobreporFume from '../../assets/images/sobrepor-fume.png';
import LeopardoFume from '../../assets/images/leopardo-cinza.jpg';

export function Visual() {
  return (
    <>
      <Grid item xs={11} sm={6} md={3.1}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='200'
            image={OculosRJ}
            alt='oculos modelo rio de janeiro'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Óculos de Proteção Modelo RJ Incolor
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={11} sm={6} md={3.1}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='200'
            image={OculosRJFume}
            alt='oculos modelo rio de janeiro'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Óculos de Proteção Modelo RJ Fumê
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={11} sm={6} md={3.1}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='200'
            image={OculosSobrepor}
            alt='oculos modelo sobrepor'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Óculos de Proteção Modelo Sobrepor Incolor
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={11} sm={6} md={3.1}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='200'
            image={SobreporFume}
            alt='oculos modelo sobrepor'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Óculos de Proteção Modelo Sobrepor Fumê
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={11} sm={6} md={3.1}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='200'
            image={OculosLeopardo}
            alt='oculos modelo leopardo'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Óculos de Proteção Modelo Leopardo Incolor
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={11} sm={6} md={3.1}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='200'
            image={LeopardoFume}
            alt='oculos modelo leopardo'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Óculos de Proteção Modelo Leopardo Fumê
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
