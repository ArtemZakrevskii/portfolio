import { Tabs } from 'antd';
import { Header } from '../header/header';
import { Entropy } from '../works/entropy';
import { Others } from '../works/others';
import styles from './main.module.css';

export const Main = () => {
  const data = [
    { name: 'Project Entropy', element: <Entropy /> },
    { name: 'Other works', element: <Others /> }] as const;

  return (
    <main className={styles.mainLayout}>
      <div className={styles.mainContainer}>
        <Header />
        <section className={styles.worksContainer}>
          <div className={styles.worksPreview}>
            <Tabs
              type="card"
              items={data.map((item, i) => ({
                label: item.name,
                key: String(i + 1),
                children: item.element,
              }))}
              style={{ color: '#CACACA' }}
            />
          </div>
        </section>
      </div>
    </main>

  );
};
