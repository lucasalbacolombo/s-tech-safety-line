import { Link } from 'react-router-dom';
import style from './style.module.scss';
import image2 from '../../assets/images/second-section.jpg';
import Button from '@mui/material/Button';

export function SecondSection() {
  return (
    <div className={style.secondBlock}>
      <div className={style.textDiv}>
        <h2>Contato</h2>
        <p>
          Acreditamos que as pessoas são as verdadeiras responsáveis por formar
          uma organização, por isso mantê-las seguras é caminhar rumo ao futuro.
          Entre em contato conosco para saber mais!
        </p>
        <div>
          <Link
            to={'/contato'}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Button variant='contained'>Contato</Button>
          </Link>
        </div>
      </div>
      <img src={image2} alt='worker' className={style.image} />
    </div>
  );
}
