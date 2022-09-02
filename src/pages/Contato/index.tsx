import { Navbar } from '../../components/Navbar';
import style from './style.module.scss';
import ContactUs from '../../assets/images/contact-us.jpg';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export function Contato() {
  return (
    <>
      <Navbar />
      <div className={style.main}>
        <h2>Entre em contato conosco</h2>
        <img src={ContactUs} alt='contato' className={style.image} />
      </div>
      <div className={style.contact}>
        <div className={style.phone}>
          <PhoneIcon sx={{ fontSize: '60px' }} />
          <p>Telefone: (11) 95610-2777</p>
        </div>
        <div className={style.phone}>
          <EmailIcon sx={{ fontSize: '60px' }} />
          <p>
            E-mail:{' '}
            <a href='mailto:fabioepis@hotmai.com'>fabioepis@hotmail.com</a>
          </p>
        </div>
      </div>
    </>
  );
}
