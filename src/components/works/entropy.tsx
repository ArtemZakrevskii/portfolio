import { Flex, Image } from 'antd';
import { entropyData } from "./data";
import styles from './works.module.css';

export const Entropy = () => {
  return (
    <>
      <p className={styles.tabTitle}>
        This portfolio is based on a game project ‘Entropy’ that I have been working on for the last
        year. Going deep into the details of the lore I designed characters and a plot of the story.
      </p>
      <Flex vertical gap={15}>
        {entropyData.map((el, i) => (
          <div key={el.id}>
            <figure className={styles.figureField}>
              {el.title && <figcaption>
                <p>
                  <i>
                    {el.title}
                  </i>
                </p>
              </figcaption>}
              <Image
                className={styles.image}
                width={700}
                src={`img/entropy-new/prev/${i + 1}.webp`}
                placeholder
                preview={{
                  src: `img/entropy-new/${i + 1}.webp`,
                }}
                alt={`Entropy work ${i + 1}`}
              />
            </figure>
            <p className={styles.description}>{el.description}</p>
          </div>
        ))}
      </Flex>
      <h4><i>A few words about my project</i></h4>
      <p>
        The project is created in a grimdark style where the leitmotif of the whole narrative is the question
        {' '}
        <i>‘What is worse: the infinite life in the universe doomed to reach a state of thermodynamic equilibrium or death?’</i>
      </p>
      <p>
        Working on the story I plunged deeply into cosmological theories and hypothesis trying to make it more realistic. I wanted to let people know that our world is unique and diverse in the way it is even without magic.
      </p>
      <p>Due to the explosion of scientific interest I believe that this project will succeed and viewers will be truly engaged into it.</p>
      <p>The final goal is a single-player grimdark drama focused on immersing a player into a storytelling with the elements of an action-adventure. With this game I intend to contribute to popularization of science.  </p>
      <p>Creating ‘Entropy’ was a fascinating process that made me inspired by sci-fi art, music and products of Quantic Dream, Kojima Productions, Blizzard, Bioware and many other game studios. </p>
    </>
  );
};
