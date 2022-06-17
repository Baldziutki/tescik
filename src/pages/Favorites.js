import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import WorkoutList from "../components/workouts/WorkoutList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p> You dont have any favorite workout. Add some!</p>;
  } else {
    content = <WorkoutList workouts={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>Favorites Workouts</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
