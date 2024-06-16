import { Carousel, Image } from 'antd';
import { othersData } from "./data";
import styles from './works.module.css';

export const Others = () => {
  return (
    <Carousel arrows infinite={false} adaptiveHeight draggable>
      {othersData.map((el, i) => (
        <div key={el.id}>
          <figure className={`${styles.figureField} ${styles.others}`}>
            <figcaption>
              <p>
                <i>
                  {el.title}
                </i>
              </p>
              <p>{el.description}</p>
            </figcaption>
            <Image
              width={500}
              src={`img/other/prev/${i + 1}.webp`}
              placeholder
              preview={{
                src: `img/other/${i + 1}.webp`,
              }}
              alt={`Other work ${i + 1}`}
            />
          </figure>
        </div>
      ))}
    </Carousel>
  );
};
