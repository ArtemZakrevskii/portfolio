/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import styles from './contacts.module.css';
import sprite from '../../../assets/icons/sprite.svg';

export const Contacts = () => {
  const socials = [
    { text: 'download', link: 'Artem_Zakrevskii_CV.pdf' },
    { text: 'linkedin', link: 'https://www.linkedin.com/in/artem-zakrevskii-2dartist/' },
    { text: 'artstation', link: 'https://www.artstation.com/artemzakrevskii' },
    { text: 'instagram', link: 'https://www.instagram.com/artem.zakrevskii93/' }] as const;

  return (
    <section className={styles.contacts}>
      <div className={styles.socials}>
        {socials.map((el) => (
          <a
            key={el.text}
            href={el.link}
            className={styles.socialLink}
            download={el.text === 'download' ? 'Artem_Zakrevskii_CV.pdf' : false}
            target="_blank"
            rel="noreferrer"
            title={el.text === 'download' ? 'Download CV' : ''}
          >
            <svg className={styles.socialImg}>
              <use xlinkHref={`${sprite}#${el.text}`} />
            </svg>
          </a>
        ))}
      </div>
      <a className={styles.email} href="mailto:artem.zakrevskii93@gmail.com">artem.zakrevskii93@gmail.com</a>
    </section>
  );
};
