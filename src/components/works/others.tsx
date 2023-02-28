import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import styles from './works.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

export const Others = () => {
  const data = [
    {
      id: 'data1',
      title: 'Deat knight" Game art for the world of warcraft',
      description: 'The death knight, after being freed from the influence of the Lich King, returned home',
    },
    {
      id: 'data2',
      title: 'Deat knight" Game art for the world of warcraft',
      description: 'The death knight, after being freed from the influence of the Lich King, returned home',
    },
    {
      id: 'data3',
      title: 'Deat knight" Game art for the world of warcraft',
      description: 'The death knight, after being freed from the influence of the Lich King, returned home',
    },
    {
      id: 'data4',
      title: '"Jinx" game art for league of legends',
      description: '',
    },
    {
      id: 'data5',
      title: '"Blood Elf" Game art for the world of warcraft. ',
      description: 'Getting condemned by a squirrel, as the forest burned down along with the soldiers of the alliance',
    },
    {
      id: 'data6',
      title: '"Blood Elf" Game art for the world of warcraft. ',
      description: 'Getting condemned by a squirrel, as the forest burned down along with the soldiers of the alliance',
    },
  ];

  return (
    <Swiper
      simulateTouch
      touchAngle={10}
      navigation
      grabCursor
      modules={[Navigation]}
      autoHeight
    >
      {data.map((el, i) => (
        <SwiperSlide key={el.id}>
          <figure className={styles.figureField}>
            <figcaption>
              <p>
                <i>
                  {el.title}
                </i>
              </p>
              <p>{el.description}</p>
            </figcaption>
            <a href={`img/other/${i + 1}.jpg`} target="_blank" rel="noreferrer">
              <img src={`img/other/${i + 1}.jpg`} width="100%" alt="prev" />
            </a>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
