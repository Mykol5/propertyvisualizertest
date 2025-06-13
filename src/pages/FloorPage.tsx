import { useAppContext } from '../utils/context';
import { FloorSelector } from '../components/FloorSelector';
import { generateFloors } from '../data/mockData';
import { BackButton } from '../components/UI/BackButton';
import styles from '../styles/pages/FloorPage.module.scss';

export const FloorPage: React.FC = () => {
  const { selectedTower, selectedFloor, selectFloor, goBack } = useAppContext();
  const floors = generateFloors(selectedTower?.id || '');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BackButton onClick={goBack} />
        <h1 className={styles.title}>{selectedTower?.name} - Select Floor</h1>
      </div>
      <FloorSelector
        floors={floors}
        selectedFloor={selectedFloor?.number || null}
        onSelect={selectFloor}
      />
    </div>
  );
};