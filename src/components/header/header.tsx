import { Contacts } from './contacts/contacts';
import styles from './header.module.css';

export const Header = () => (
  <section className={styles.header}>
    <div className={styles.info}>
      <div className={styles.name}>
        <h2>Artem Zakrevskii | Concept Artist / 2D Artist</h2>
        <p>
          Concept artist with 2 years of experience and a strong
          background in engineering.
        </p>
        <p>
          Proficient in Photoshop.
          Familiar with 3ds Max and Zbrush.
        </p>
        <p>
          Specialize in character
          concepts while also skilled in environment, prop, and
          other visual elements. Good at innovative and
          unexpected solutions, blending creative vision with
          technical expertise.
        </p>
        <div className={styles.container}>
          <div>
            <br />
            <h3>Work experience</h3>
            <p>2022</p>
            <p>
              Freelance Concept Artist
            </p>
            <br />
            <p>Jan 2023 - Present</p>
            <p>
              <a href="https://www.iplaymore.com/" target="_blank" rel="noreferrer">IMU STUDIOS.</a>
              {' '}
              Concept Artist
            </p>
          </div>
          <Contacts />
        </div>
      </div>
    </div>
    <div className={styles.profession}>
      <h2>Skills</h2>
      <ul className={styles.skills}>
        <li className={styles.skillsItem}>Digital Painting</li>
        <li>Concept Art</li>
        <li>Character Design</li>
        <li>Illustration</li>
        <li>Photoshop</li>
        <li>AI Tools</li>
      </ul>
      <h4>Languages</h4>
      <p>Russian: Native</p>
      <p>English: Intermediate (B1)</p>
      <p>Polish: Intermediate (B1)</p>
    </div>
  </section>
);
