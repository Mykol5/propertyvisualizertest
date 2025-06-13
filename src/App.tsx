import React from 'react';
import { useAppContext } from './utils/context';
import { TowersPage } from './pages/TowersPage';
import { FloorPage } from './pages/FloorPage';
import { LayoutPage } from './pages/LayoutPage';
import { LayoutViewer } from './components/LayoutViewer';
import './styles/main.scss';

export const App: React.FC = () => {
  const { selectedTower, selectedFloor, selectedApartment } = useAppContext();

  return (
    <div className="app">
      {!selectedTower && <TowersPage />}
      {selectedTower && !selectedFloor && <FloorPage />}
      {selectedTower && selectedFloor && !selectedApartment && <LayoutPage />}
      {selectedApartment && <LayoutViewer />}
    </div>
  );
};