import { useAppContext } from '../utils/context';
import styles from '../styles/components/LayoutViewer.module.scss';

export const LayoutViewer: React.FC = () => {
  const { selectedApartment, goBack } = useAppContext();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={goBack} className={styles.backButton}>
          &larr; Back to Units
        </button>
        <h1 className={styles.title}>{selectedApartment?.type} Layout</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img 
            src={selectedApartment?.image} 
            alt={`${selectedApartment?.type} layout`} 
            className={styles.image}
          />
        </div>

        <div className={styles.details}>
          <h2>{selectedApartment?.type} Apartment</h2>
          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <h3>Area</h3>
              <p>{selectedApartment?.area} sqft</p>
            </div>
            <div className={styles.metaItem}>
              <h3>Bedrooms</h3>
              <p>{selectedApartment?.bedrooms}</p>
            </div>
            <div className={styles.metaItem}>
              <h3>Bathrooms</h3>
              <p>{selectedApartment?.bathrooms}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};