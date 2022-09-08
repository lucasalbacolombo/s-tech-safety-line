import style from './style.module.scss';
import { HomeNavbar } from '../../components/HomeNavbar';
import Image from '../../assets/images/about-us-image.jpeg';
import { Footer } from '../../components/Footer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export function SobreNos() {
  return (
    <>
      <HomeNavbar />
      <div className={style.main} style={{ backgroundImage: `url(${Image})` }}>
        <h2 className={style.text}>Sobre Nós</h2>
      </div>
      <div className={style.information1}>
        <article>
          <p>
            <strong>A S-Tech Safety Line</strong> acredita que prevenir
            acidentes é caminhar rumo ao futuro, assim fomentamos uma cultura de
            inovação, flexibilidade e excelência. Oferecemos uma diversificada
            linha de produtos, construídos com materiais de alta qualidade para
            garantir maior proteção, conforto e estilo.
          </p>
          <p>
            <strong>Nossa visão</strong> é nos tornarmos a marca mais sólida e
            confiável de EPI do Brasil, assim trabalhamos diariamente para
            oferecer produtos e serviços de alta qualidade, atendendo as
            demandas de nossos clientes com excelência.
          </p>
          <p>
            <strong>Temos a missão </strong>de continuar o nosso compromisso com
            a segurança dos trabalhadores. Acreditamos que as pessoas são as
            verdadeiras responsáveis por formar uma organização, por isso
            mantê-las seguras é caminhar rumo ao futuro.
          </p>
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
