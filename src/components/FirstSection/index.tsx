import style from './style.module.scss';
import image1 from '../../assets/images/first-section1.jpg';
import Button from '@mui/material/Button';

export function FirstSection() {
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
      <img src={image1} alt='worker' className={style.image} />
    </div>
  );
}
