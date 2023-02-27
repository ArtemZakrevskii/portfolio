import { Carousel } from 'antd';
import styles from './works.module.css';

export const Others = () => {
  const data = [
    {
      id: 'data1',
      title: 'Deat knight" Game art for the world of warcraft',
      description: 'The death knight, after being freed from the influence of the Lich King, returned home',
    },
    {
      id: 'data2',
      title: '"Jinx" game art for league of legends',
      description: '',
    },
    {
      id: 'data3',
      title: '"Blood Elf" Game art for the world of warcraft. ',
      description: 'Getting condemned by a squirrel, as the forest burned down along with the soldiers of the alliance',
    },
  ];

  return (
    <>
      <p>
        This portfolio is based on a game project ‘Entropy’ that I have been working on for the last
        year. Going deep into the details of the lore I designed characters and a plot of the story.
      </p>
      <Carousel
        style={{ color: '#cacaca' }}
        dotPosition="top"
        adaptiveHeight
        draggable
        infinite={false}
      >
        {data.map((el, i) => (
          <div key={el.id}>
            <figure className={styles.figureField}>
              <figcaption>
                <p>
                  <i>
                    {el.title}
                  </i>
                </p>
                <p>{el.description}</p>
              </figcaption>
              <a href={`/img/other/${i + 1}.1.jpg`} target="_blank" rel="noreferrer">
                <img src={`/img/other/${i + 1}.1.jpg`} width="100%" alt="prev" />
              </a>
            </figure>
          </div>
        ))}
      </Carousel>
    </>
  );
};
