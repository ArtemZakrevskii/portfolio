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
            <h3>Work experience</h3>
            <div className={styles.experience}>
              <div>
                <p>2022</p>
                <p>
                  Freelance Concept Artist
                </p>
              </div>
              <div>
                <p>Jan 2023 - Present</p>
                <p>
                  <a href="https://www.iplaymore.com/" target="_blank" rel="noreferrer">IMU STUDIOS.</a>
                  {' '}
                  Concept Artist
                </p>
              </div>
            </div>
          </div>
          <Contacts />
        </div>
      </div>
    </div>
    <div className={styles.profession}>
      <div>
        <h2>Skills</h2>
        <ul className={styles.skills}>
          <li>Digital Painting</li>
          <li>Concept Art</li>
          <li>Character Design</li>
          <li>Illustration</li>
          <li>Photoshop</li>
          <li>AI Tools</li>
        </ul>
      </div>
      <div>
        <h4 className={styles.languages}>Languages</h4>
        <ul className={styles.skills}>
          <li>Russian: Native</li>
          <li>English: Intermediate (B1)</li>
          <li>Polish: Intermediate (B1)</li>
        </ul>
      </div>
    </div>
  </section>
);
