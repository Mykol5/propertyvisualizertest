import { motion } from 'framer-motion';
import { Floor } from '../data/mockData';
import styles from '../styles/components/FloorSelector.module.scss';

interface FloorSelectorProps {
  floors: Floor[];
  selectedFloor: number | null;
  onSelect: (floor: Floor) => void;
}

export const FloorSelector: React.FC<FloorSelectorProps> = ({ floors, selectedFloor, onSelect }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {floors.map((floor) => (
          <motion.button
            key={floor.number}
            className={`${styles.floorButton} ${
              selectedFloor === floor.number ? styles.selected : ''
            }`}
            onClick={() => onSelect(floor)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {floor.number}
          </motion.button>
        ))}
      </div>
    </div>
  );
};