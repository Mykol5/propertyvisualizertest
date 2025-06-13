import { useAppContext } from '../utils/context';
import { TowerCard } from '../components/TowerCard';
import { towers } from '../data/mockData';
import styles from '../styles/pages/TowersPage.module.scss';

export const TowersPage: React.FC = () => {
  const { selectTower } = useAppContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Select a Tower</h1>
      <div className={styles.grid}>
        {towers.map((tower) => (
          <TowerCard key={tower.id} tower={tower} onClick={() => selectTower(tower)} />
        ))}
      </div>
    </div>
  );
};