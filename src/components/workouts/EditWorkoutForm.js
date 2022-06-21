import { useRef, useEffect } from 'react';

import Card from '../ui/Card';
import classes from './NewWorkoutForm.module.css';

function EditWorkoutForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const radioInputRef1 = useRef();
  const radioInputRef2 = useRef();
  const radioInputRef3 = useRef();
  const checkboxInputRef1 = useRef();
  const checkboxInputRef2 = useRef();
  const checkboxInputRef3 = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const entredDescription = descriptionInputRef.current.value;
    let enteredRadio;
    let enteredCheckbox = "";

    radioInputRef1.current.checked
      ? (enteredRadio = radioInputRef1.current.value)
      : radioInputRef2.current.checked
      ? (enteredRadio = radioInputRef2.current.value)
      : radioInputRef3.current.checked
      ? (enteredRadio = radioInputRef3.current.value)
      : (enteredRadio = null);

    if (checkboxInputRef1.current.checked)
      enteredCheckbox += "• " + checkboxInputRef1.current.value + " ";
    if (checkboxInputRef2.current.checked)
      enteredCheckbox += "• " + checkboxInputRef2.current.value + " ";
    if (checkboxInputRef3.current.checked)
      enteredCheckbox += "• " + checkboxInputRef3.current.value + " ";

    const workoutData = {
      title: enteredTitle,
      image: enteredImage,
      radio: enteredRadio,
      description: entredDescription,
      checkbox: enteredCheckbox,
    };

    props.onEditWorkout(workoutData);
  }

  useEffect(() => {
    titleInputRef.current.value = props.workout.title;
    imageInputRef.current.value = props.workout.image;
    descriptionInputRef.current.value = props.workout.description;
  }, []);

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
          <label>Workout time</label>
        </div>
        <div className={classes.radios}>
          <input
            type="radio"
            id="radio1"
            value="Less than 60min"
            name="radio"
            ref={radioInputRef1}
          ></input>
          <label htmlFor="radio1">Less than 60min</label>
          <input
            type="radio"
            id="radio2"
            value="60-120min"
            name="radio"
            ref={radioInputRef2}
          ></input>
          <label htmlFor="radio2">60-120min</label>
          <input
            type="radio"
            id="radio3"
            value="More than 120min"
            name="radio"
            ref={radioInputRef3}
          ></input>
          <label htmlFor="radio3">More than 120min</label>
        </div>
        <div className={classes.control}>
          <label>Workout level</label>
        </div>
        <div className={classes.radios}>
          <label htmlFor="ch1">
            <input
              type="checkbox"
              id="ch1"
              value="Newbie"
              name="checkbox"
              ref={checkboxInputRef1}
            ></input>
            <span>Newbie</span>
          </label>
          <label htmlFor="ch2">
            <input
              type="checkbox"
              id="ch2"
              value="Medium"
              name="checkbox"
              ref={checkboxInputRef2}
            ></input>
            <span>Medium</span>
          </label>
          <label htmlFor="ch3">
            <input
              type="checkbox"
              id="ch3"
              value="Pro"
              name="checkbox"
              ref={checkboxInputRef3}
            ></input>
            <span>Pro</span>
          </label>
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

export default EditWorkoutForm;
