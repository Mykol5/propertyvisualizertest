import { useState } from 'react';
import { useAppContext } from '../utils/context';
import { ApartmentCard } from '../components/ApartmentCard';
import { BackButton } from '../components/UI/BackButton';
import styles from '../styles/pages/LayoutPage.module.scss';
import { Apartment } from '../data/mockData';

export const LayoutPage: React.FC = () => {
  const { selectedFloor, selectedApartment, selectApartment, goBack } = useAppContext();
  const [hoveredApartment, setHoveredApartment] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BackButton onClick={goBack} />
        <h1 className={styles.title}>Floor {selectedFloor?.number} - Select Unit</h1>
      </div>

      <div className={`${styles.layoutContainer} ${hoveredApartment ? styles.darkened : ''}`}>
        <div className={styles.grid}>
          {selectedFloor?.apartments.map((apartment: Apartment) => (
            <ApartmentCard
              key={apartment.id}
              apartment={apartment}
              onClick={() => selectApartment(apartment)}
              isHovered={hoveredApartment === apartment.id}
              onHoverStart={() => setHoveredApartment(apartment.id)}
              onHoverEnd={() => setHoveredApartment(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};