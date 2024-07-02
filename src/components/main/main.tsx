import { Tabs } from 'antd';
import { Header } from '../header/header';
import { Entropy } from '../works/entropy';
import { Others } from '../works/others';
import styles from './main.module.css';

export const Main = () => {
  const data = [
    { name: 'Project Entropy', element: <Entropy /> },
    { name: 'Other works', element: <Others /> }] as const;
  // картинки в столбик, под каждой текст без слайдера
  return (
    <main className={styles.mainLayout}>
      <div className={styles.mainContainer}>
        <Header />
        <section className={styles.worksContainer}>
          <div className={styles.worksPreview}>
            <Entropy />
          </div>
        </section>
      </div>
    </main>

  );
};
