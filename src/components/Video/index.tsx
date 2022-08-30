import video from '../../assets/videos/Sky - 43168.mp4';
import style from './style.module.scss';

export function Video() {
  return (
    <div className={style.main}>
      <div className={style.overlay}></div>
      <video src={video} autoPlay loop muted />
      <div className={style.content}>
        <h1>S-Tech Safety Line</h1>
        <h2>Prevenir acidentes é caminhar rumo ao futuro</h2>
      </div>
    </div>
  );
}
