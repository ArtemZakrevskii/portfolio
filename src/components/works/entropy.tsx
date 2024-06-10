import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from 'antd';
import styles from './works.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

export const Entropy = () => {
  const data = [
    {
      id: 'data1',
      title: 'Sounds of gunfire have stopped and the noise of breaking spine bones came out in silence.',
      description: 'A team of geologists with the protagonist arrived to Antarctica, the Wilk Land crater. Protected by a private military company they came to explore an abandoned autonomous research station that hovered over the ice sheet fault. The team went down to the signal and found a complex of underground facilities.',
    },
    {
      id: 'data2',
      title: 'Sounds of gunfire have stopped and the noise of breaking spine bones came out in silence.',
      description: 'A team of geologists with the protagonist arrived to Antarctica, the Wilk Land crater. Protected by a private military company they came to explore an abandoned autonomous research station that hovered over the ice sheet fault. The team went down to the signal and found a complex of underground facilities.',
    },
    {
      id: 'data3',
      title: 'A massive figure with huge metal wings reflecting the sunshine pierced through the clouds above the cliff and froze in the sky. Her bottomless black eyes terrified me. She reached me out blinding me with her shining and I slowly started losing my consciousness. I wanted to find a salvation. I tried so hard and got so far. But in the end I lost everything. And now it doesn`t even matter. This final journey is such a beautiful place.',
      description: 'A strict isolation was implemented to eliminate the influence on the development of civilization. The minds of intruders are extracted, defragmented and examined in details. These measures are necessary in order to defence secrecy. ',
    },
    {
      id: 'data4',
      title: 'A massive figure with huge metal wings reflecting the sunshine pierced through the clouds above the cliff and froze in the sky. Her bottomless black eyes terrified me. She reached me out blinding me with her shining and I slowly started losing my consciousness. I wanted to find a salvation. I tried so hard and got so far. But in the end I lost everything. And now it doesn`t even matter. This final journey is such a beautiful place.',
      description: 'A strict isolation was implemented to eliminate the influence on the development of civilization. The minds of intruders are extracted, defragmented and examined in details. These measures are necessary in order to defence secrecy. ',
    },
    {
      id: 'data5',
      title: '‘Dive into water and relax, it will soothe you and wash all the negative thoughts away’',
      description: 'This active neuroenvironment allows us to improve and properly structure the work of any types of nerosystems. We can use it in different energy states to support the functions of our systems.',
    },
    {
      id: 'data6',
      title: 'By the age of 30 my life is nothing but a Groundhog Day. Was it all worth it paying my limbs and taking part in never-ending wars? God knows how deeply exhausted I am.',
      description: 'The protagonist was born in 2137. She is 30 years old by the moment the story starts. It`s Northern Union (authoritarian technocratic state in Scandinavian countries). During the military operation and being a soldier of a private military company she lost her limbs in Cairo wasteland. Since that moment she has had the synthetic muscle-powered prosthetic legs and arms.',
    },
    {
      id: 'data7',
      title: 'By the age of 30 my life is nothing but a Groundhog Day. Was it all worth it paying my limbs and taking part in never-ending wars? God knows how deeply exhausted I am.',
      description: 'The protagonist was born in 2137. She is 30 years old by the moment the story starts. It`s Northern Union (authoritarian technocratic state in Scandinavian countries). During the military operation and being a soldier of a private military company she lost her limbs in Cairo wasteland. Since that moment she has had the synthetic muscle-powered prosthetic legs and arms.',
    },
    {
      id: 'data8',
      title: 'Once you step on the forbidden land you inevitably pass into oblivion. ',
      description: 'Taking various shapes and in cooperation with other systems they protect the secrets of continent existence night and day. Not a single attempt of interaction with this civilization is allowed.',
    },
  ];

  return (
    <>
      <p className={styles.tabTitle}>
        This portfolio is based on a game project ‘Entropy’ that I have been working on for the last
        year. Going deep into the details of the lore I designed characters and a plot of the story.
      </p>
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
              </figcaption>
              <Image
                width={500}
                src={`img/entropy/prev/${i + 1}.webp`}
                placeholder
                preview={{
                  src: `img/entropy/${i + 1}.webp`,
                }}
                alt={`Entropy work ${i + 1}`}
              />
            </figure>
            <p>{el.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
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
