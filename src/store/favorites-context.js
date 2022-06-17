import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteWorkout) => {},
  removeFavorite: (workoutId) => {},
  itemIsFavorite: (workoutId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteWorkout) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteWorkout);
    });
  }

  function removeFavoriteHandler(workoutId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((workout) => workout.id !== workoutId);
    });
  }

  function itemIsFavoriteHandler(workoutId) {
    return userFavorites.some((workout) => workout.id === workoutId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
