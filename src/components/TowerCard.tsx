import { motion } from 'framer-motion';
import { Tower } from '../data/mockData';
import styles from '../styles/components/TowerCard.module.scss';

interface TowerCardProps {
  tower: Tower;
  onClick: () => void;
}

export const TowerCard: React.FC<TowerCardProps> = ({ tower, onClick }) => {
  return (
    <motion.div
      className={styles.card}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.imageContainer}>
        <img src={tower.image} alt={tower.name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3>{tower.name}</h3>
      </div>
    </motion.div>
  );
};