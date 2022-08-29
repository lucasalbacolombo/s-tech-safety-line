import video from '../../assets/videos/Sky - 43168.mp4';
import style from './style.module.scss';

export function Video() {
  return (
    <div className={style.main}>
      <div className={style.overlay}></div>
      <video src={video} autoPlay loop muted />
      <div className={style.content}>
        <h1>Título vai aqui</h1>
        <p>Texto vai aqui</p>
      </div>
    </div>
  );
}
