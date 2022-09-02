import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Capa from '../../assets/images/capa-chuva.jpg';

export function Impermeaveis() {
  return (
    <>
      <Grid item xs={11} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='300'
            image={Capa}
            alt='capa de chuva amarela'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Capa de Chuva Amarela Forrada com Capuz
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>Tamanhos: G e GG</p>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              to={'/impermeaveis'}
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
