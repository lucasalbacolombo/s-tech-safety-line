import style from './style.module.scss';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <div className={style.footer}>
      <span>&copy; 2023 S-Tech Safety Line. All Rights Reserved.</span>
      <Link to={'/'}>
        <img src={Logo} alt="logo" className={style.logo1} />
      </Link>
    </div>
  );
}
