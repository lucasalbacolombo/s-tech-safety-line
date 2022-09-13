import { Navbar } from '../../components/Navbar';
import style from './style.module.scss';
import ContactUs from '../../assets/images/contact-us.jpg';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Footer } from '../../components/Footer';

export function Contato() {
  return (
    <>
      <Navbar />
      <div className={style.heightDiv}>
        <div className={style.main}>
          <h2 className={style.title}>Entre em contato conosco</h2>
          <img src={ContactUs} alt='contato' className={style.image} />
        </div>
        <div className={style.contact}>
          <div className={style.contactBox}>
            <div>
              <PhoneIcon sx={{ fontSize: '50px' }} />
              <WhatsAppIcon sx={{ fontSize: '50px', ml: '30px' }} />
            </div>
            <p>
              Entre em contato com nosso departamento de vendas pelo telefone ou
              whatsapp.
            </p>
            <p>
              <strong>(11) 95610-2777</strong>
            </p>
          </div>
          <div className={style.contactBox}>
            <EmailIcon sx={{ fontSize: '50px' }} />
            <p>Entre em contato por e-mail</p>
            <p className={style.link}>
              <strong>
                <a href='mailto:fabio@s-techline.com.br'>
                  fabio@s-techline.com.br
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <a href='mailto:fabioepis@hotmai.com'>fabioepis@hotmail.com</a>
              </strong>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
