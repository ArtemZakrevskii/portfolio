/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import styles from './contacts.module.css';
import sprite from '../../../assets/icons/sprite.svg';

export const Contacts = () => {
  const socials = [
    { id: 'linkedin', link: 'https://www.linkedin.com/in/artem-zakrevskii-2dartist/', text: "LinkedIn" },
    { id: 'email', link: 'mailto:artem.zakrevskii93@gmail.com', text: "Artem.zakrevskii93@gmail.com" }] as const;

  return (
    <section className={styles.contacts}>
      <div className={styles.socials}>
        <a
          href="Artem_Zakrevskii_CV.pdf"
          className={styles.socialLink}
          download='Artem_Zakrevskii_CV.pdf'
          target="_blank"
          rel="noreferrer"
          title='Download CV'
        >
          <svg className={styles.socialImg}>
            <use xlinkHref={`${sprite}#download`} />
          </svg>
          <span>Download CV</span>
        </a>
        {socials.map((el) => (
          <a
            key={el.id}
            href={el.link}
            className={styles.socialLink}
            target="_blank"
            rel="noreferrer"
          >
            <svg className={styles.socialImg}>
              <use xlinkHref={`${sprite}#${el.id}`} />
            </svg>
            {el.text}
          </a>
        ))}
      </div>
    </section>
  );
};
