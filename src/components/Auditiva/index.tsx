import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import PlugueCopolimero from '../../assets/images/plug.png';
import PlugueSilicone from '../../assets/images/plug-silicone.jpeg';
import Abafador from '../../assets/images/abafador.jpg';

export function Auditiva() {
  return (
    <>
      <Grid item xs={11} sm={6} md={3}>
        <Card sx={{ maxWidth: 345, height: '500px' }}>
          <CardMedia
            component='img'
            height='350'
            image={PlugueSilicone}
            alt='plug silicone'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Plugue Auricular Silicone
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={11} sm={6} md={3}>
        <Card sx={{ maxWidth: 345, height: '500px' }}>
          <CardMedia
            component='img'
            height='350'
            image={PlugueCopolimero}
            alt='plug copolimero'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Plugue Auricular Copolímero
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={11} sm={6} md={3}>
        <Card sx={{ maxWidth: 345, height: '500px' }}>
          <CardMedia
            component='img'
            height='350'
            image={Abafador}
            alt='abafador tipo concha'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Abafador Tipo Concha
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
