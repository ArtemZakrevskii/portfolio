import { Contacts } from './contacts/contacts';
import styles from './header.module.css';

export const Header = () => (
  <section className={styles.header}>
    <div className={styles.info}>
      <div className={styles.avatar}>
        <div className={styles.avatarFrame}>
          <img src="img/avatar-frame.png" alt="avatar frame" />
        </div>
        <div className={styles.avatarContainer}>
          <img src="img/avatar.jpg" alt="avatar" />
        </div>
      </div>
      <div className={styles.name}>
        <h2>Artem Zakrevskii</h2>
        <p>
          I'm 29 years old. Have Engineer degree.
        </p>
        <p>
          2D Artist, Character Artist, based in Łódź, Poland. Specialized on Concept Art
          Illustration.
        </p>
        <p>
          Hardworking and passionate, devoted to my work. Self-motivated and always ready to learn.
          Being truly inspired by games, modern art, science fiction and travelling.
        </p>
        <div>
          <h3>Work experience</h3>
          <p>Jan 2023 - Present</p>
          <p>
            <a href="https://www.iplaymore.com/" target="_blank" rel="noreferrer">IMU STUDIOS.</a>
            {' '}
            Concept artist
          </p>
        </div>
        <Contacts />
      </div>
    </div>
    <div className={styles.profession}>
      <h2>Concept artist / 2d artist</h2>
      <h4>Tech Stack</h4>
      <p className={styles.skills}>
        Photoshop, Blender, Autocad, Sketching concept designs and key elements of the visual style,
        Applying textures to all visual elements, Adding lighting and shading effects to all elements, ensuring consistency in color, intensity and lighting levels,
        Advanced understanding of visual language - texture, color, dimension, scale, perspective, shade, composition depth of field, proportion, spatial awareness,
        Solid knowledge of game genres and latest trends in gaming
      </p>
      <h4>Language skills</h4>
      <p>Russian: Native</p>
      <p>English: Intermediate (B1)</p>
      <p>Polish: Intermediate (B1)</p>
    </div>
  </section>
);
