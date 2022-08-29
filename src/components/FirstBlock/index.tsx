import style from './style.module.scss';
import image from '../../assets/images/first.jpg';
import Button from '@mui/material/Button';

export function FirstBlock() {
  return (
    <div className={style.firstBlock}>
      <div className={style.textDiv}>
        <h1>Equipamentos de Proteção Individual</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem
          aut beatae enim exercitationem. Corrupti blanditiis vero unde!
          Laudantium officia ratione officiis, sapiente necessitatibus eligendi
          consequuntur quam voluptatem dolorem totam.
        </p>
        <div>
          <Button variant='contained'>Produtos</Button>
        </div>
      </div>
      <div className={style.imageDiv}>
        {/* <img src={image} alt='worker' className={style.image} /> */}
      </div>
    </div>
  );
}
