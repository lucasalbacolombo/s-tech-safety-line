import { Link } from 'react-router-dom';
import style from './style.module.scss';
import image1 from '../../assets/images/first-section1.jpg';
import Button from '@mui/material/Button';

export function FirstSection() {
  return (
    <div className={style.firstBlock}>
      <div className={style.textDiv}>
        <h1>Equipamentos de Proteção Individual</h1>
        <p>
          Oferecemos uma diversificada linha de produtos nos setores de proteção
          visual, proteção auditiva, proteção para as mãos, proteção
          respiratória e impermeáveis. Todos os nossos produtos possuem
          Certificado de Aprovação (CA) vigente, construídos com materiais de
          alta qualidade para garantir maior proteção, conforto e estilo.
        </p>
        <div className={style.btnDiv}>
          <Link
            to={'/produtos'}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Button variant='contained' className={style.btn}>
              Produtos
            </Button>
          </Link>
        </div>
      </div>
      <img src={image1} alt='worker' className={style.image} />
    </div>
  );
}
