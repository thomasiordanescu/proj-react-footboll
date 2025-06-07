import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favoriteTeams');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoriteTeams', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (team) => {
    setFavorites(prev => {
      const exists = prev.some(f => f.idTeam === team.idTeam);
      return exists 
        ? prev.filter(f => f.idTeam !== team.idTeam)
        : [...prev, team];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);