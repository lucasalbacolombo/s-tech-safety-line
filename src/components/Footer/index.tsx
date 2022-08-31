import style from './style.module.scss';
import Logo from '../../assets/images/logo.png';

export function Footer() {
  return (
    <div className={style.footer}>
      <span>&copy; 2022 S-Tech Safety Line. All Rights Reserved.</span>
      <img src={Logo} alt='logo' className={style.logo1} />
    </div>
  );
}
