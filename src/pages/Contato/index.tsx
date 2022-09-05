import { Navbar } from '../../components/Navbar';
import style from './style.module.scss';
import ContactUs from '../../assets/images/contact-us.jpg';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
          <div>
            <PhoneIcon sx={{ fontSize: '50px' }} />
            <WhatsAppIcon sx={{ fontSize: '50px', ml: '30px' }} />
          </div>
          <p>
            Entre em contato com nosso departamento de vendas pelo telefone ou
            whatsapp.
          </p>
          <p>(11) 95610-2777</p>
        </div>
        <div className={style.phone}>
          <EmailIcon sx={{ fontSize: '50px' }} />
          <p>Entre em contato por e-mail</p>
          <p>
            <a href='mailto:fabioepis@hotmai.com'>fabioepis@hotmail.com</a>
          </p>
        </div>
      </div>
    </>
  );
}
