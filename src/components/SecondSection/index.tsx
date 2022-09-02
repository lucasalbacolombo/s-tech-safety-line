import { Link } from 'react-router-dom';
import style from './style.module.scss';
import image2 from '../../assets/images/second-section.jpg';
import Button from '@mui/material/Button';

export function SecondSection() {
  return (
    <div className={style.secondBlock}>
      <div className={style.textDiv}>
        <h2>Contato</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem
          aut beatae enim exercitationem. Corrupti blanditiis vero unde!
          Laudantium officia ratione officiis, sapiente necessitatibus eligendi
          consequuntur quam voluptatem dolorem totam.
        </p>
        <div>
          <Link
            to={'/contato'}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Button variant='contained'>Contato</Button>
          </Link>
        </div>
      </div>
      <img src={image2} alt='worker' className={style.image} />
    </div>
  );
}
