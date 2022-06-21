import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";
import classes from "./WorkoutItem.module.css";
import FavoritesContext from "../../store/favorites-context";

function WorkoutItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const navigate = useNavigate();

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        radio: props.radio,
        checkbox: props.checkbox,
        address: props.address,
      });
    }
  }

  function removeWorkout() {
    const workouts = JSON.parse(localStorage.getItem("workouts") ?? "{}");
    delete workouts[props.id];

    localStorage.setItem("workouts", JSON.stringify(workouts));
    props.setLoadedWorkouts(workouts);
  }

  function editWorkout() {
    navigate("/edit/" + props.id, { replace: true });
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p className={classes.preline}>
            {props.radio == null
              ? ""
              : "Workout time: " + props.radio + "\n"}</p>
          <p>
            {props.checkbox == null
              ? ""
              : "Workout level: " + props.checkbox}
          </p>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To favorites"}
          </button>
          <button onClick={editWorkout}>Edit</button>
          <button onClick={removeWorkout}>Delete</button>
        </div>
      </Card>
    </li>
  );
}

export default WorkoutItem;
