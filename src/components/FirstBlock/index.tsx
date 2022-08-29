import style from './style.module.scss';
import image from '../../assets/images/first.jpg';

export function FirstBlock() {
  return (
    <div className={style.firstBlock}>
      <div className={style.imageDiv}>
        {/* <img src={image} alt='worker' className={style.image} /> */}
      </div>
    </div>
  );
}
