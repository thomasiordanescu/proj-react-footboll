import './footboll-react.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Team from './Team';
import Favorites from './Favorites';
import { FavoritesProvider } from './AddToFavorites';

const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
};

export default App;