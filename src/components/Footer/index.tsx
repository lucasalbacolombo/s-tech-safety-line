import style from './style.module.scss';
import Logo from '../../assets/images/logo.png';

export function Footer() {
  return (
    <div className={style.footer}>
      <span>&copy; S-Tech Safety Line Copyright 2022 All rights reserved</span>
      <img src={Logo} alt='logo' className={style.logo1} />
    </div>
  );
}
