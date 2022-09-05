import style from './style.module.scss';
import { Navbar } from '../../components/Navbar';
import Image from '../../assets/images/about-us-image.jpeg';
import { Footer } from '../../components/Footer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export function SobreNos() {
  return (
    <>
      <Navbar />
      <div className={style.main} style={{ backgroundImage: `url(${Image})` }}>
        <h2 className={style.text}>Sobre Nós</h2>
      </div>
      <div className={style.information1}>
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam nisi
          error ea repellendus! Eius modi, facilis deserunt eum doloremque porro
          quas perspiciatis et molestiae sapiente voluptates id unde numquam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam nisi
          error ea repellendus! Eius modi, facilis deserunt eum doloremque porro
          quas perspiciatis et molestiae sapiente voluptates id unde numquam.
        </article>
      </div>
      <div className={style.buttons}>
        <Link
          to={'/produtos'}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Button
            sx={{ backgroundColor: 'rgb(16, 28, 88)', m: '5px' }}
            variant='contained'
          >
            Nossos Produtos
          </Button>
        </Link>
        <Link
          to={'/contato'}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Button
            sx={{ backgroundColor: 'rgb(16, 28, 88)', m: '5px' }}
            variant='contained'
          >
            Entre em contato conosco
          </Button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
