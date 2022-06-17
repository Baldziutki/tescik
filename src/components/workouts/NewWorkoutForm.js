import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewWorkoutForm.module.css";

function NewWorkoutForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const entredDescription = descriptionInputRef.current.value;

    const workoutData = {
      title: enteredTitle,
      image: enteredImage,
      description: entredDescription,
    };

    props.onAddWorkout(workoutData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Workout Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Workout Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Workout</button>
        </div>
      </form>
    </Card>
  );
}

export default NewWorkoutForm;
