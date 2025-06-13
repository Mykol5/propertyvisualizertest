// Export interfaces
export interface Tower {
  id: string;
  name: string;
  image: string;
}

export interface Apartment {
  id: string;
  type: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
}

export interface Floor {
  number: number;
  apartments: Apartment[];
}

// To export tower data
export const towers: Tower[] = [
  {
    id: 'A',
    name: 'Tower A',
    image: '/images/tower-a.jpg',
  },
  {
    id: 'B',
    name: 'Tower B',
    image: '/images/tower-b.jpg',
  },
  {
    id: 'C',
    name: 'Tower C',
    image: '/images/tower-c.jpg',
  },
];

// To generate floors and apartments for each tower

export const generateFloors = (towerId: string): Floor[] => {
  return Array.from({ length: 15 }, (_, i) => ({
    number: i + 1,
    apartments: [
      {
        id: `${towerId}${i + 1}01`,
        type: 'Studio',
        area: 650,
        bedrooms: 0,
        bathrooms: 1,
        image: '/images/layouts/studio.jpg' 
      },
      {
        id: `${towerId}${i + 1}02`,
        type: '1BR',
        area: 850,
        bedrooms: 1,
        bathrooms: 1,
        image: '/images/layouts/1br.jpg'
      },
      {
        id: `${towerId}${i + 1}03`,
        type: '2BR',
        area: 1200,
        bedrooms: 2,
        bathrooms: 2,
        image: '/images/layouts/2br.jpg'
      },
      {
        id: `${towerId}${i + 1}04`,
        type: '3BR',
        area: 1500,
        bedrooms: 3,
        bathrooms: 2,
        image: '/images/layouts/3br.jpg'
      }
    ]
  }));
};