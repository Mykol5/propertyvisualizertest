import { motion } from 'framer-motion';
import { Apartment } from '../data/mockData';
import styles from '../styles/components/ApartmentCard.module.scss';

interface ApartmentCardProps {
  apartment: Apartment;
  onClick: () => void;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export const ApartmentCard: React.FC<ApartmentCardProps> = ({
  apartment,
  onClick,
  isHovered,
  onHoverStart,
  onHoverEnd,
}) => {
  return (
    <motion.div
      className={`${styles.card} ${isHovered ? styles.hovered : ''}`}
      onClick={onClick}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onTouchStart={onHoverStart}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={styles.imageContainer}>
        <img src={apartment.image} alt={apartment.type} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h3>{apartment.type}</h3>
        <p>{apartment.area} sqft</p>
        <p>
          {apartment.bedrooms} BR | {apartment.bathrooms} BA
        </p>
      </div>
    </motion.div>
  );
};