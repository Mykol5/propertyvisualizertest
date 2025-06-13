import { createContext, useContext, useState } from 'react';
import { Apartment, Floor, Tower } from '../data/mockData';

interface AppContextType {
  selectedTower: Tower | null;
  selectedFloor: Floor | null;
  selectedApartment: Apartment | null;
  selectTower: (tower: Tower) => void;
  selectFloor: (floor: Floor) => void;
  selectApartment: (apartment: Apartment) => void;
  goBack: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedTower, setSelectedTower] = useState<Tower | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);
  const [history, setHistory] = useState<Array<{ tower: Tower | null; floor: Floor | null }>>([]);

  const selectTower = (tower: Tower) => {
    setHistory([...history, { tower: selectedTower, floor: selectedFloor }]);
    setSelectedTower(tower);
    setSelectedFloor(null);
    setSelectedApartment(null);
  };

  const selectFloor = (floor: Floor) => {
    setHistory([...history, { tower: selectedTower, floor: selectedFloor }]);
    setSelectedFloor(floor);
    setSelectedApartment(null);
  };

  const selectApartment = (apartment: Apartment) => {
    setSelectedApartment(apartment);
  };

  const goBack = () => {
    const prev = history[history.length - 1];
    if (prev) {
      setSelectedTower(prev.tower);
      setSelectedFloor(prev.floor);
      setHistory(history.slice(0, -1));
    }
  };

  return (
    <AppContext.Provider
      value={{
        selectedTower,
        selectedFloor,
        selectedApartment,
        selectTower,
        selectFloor,
        selectApartment,
        goBack,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};