import WorkoutItem from './WorkoutItem';
import classes from './WorkoutList.module.css';

function WorkoutsList(props) {
  return (
    <ul className={classes.list}>
      {Object.entries(props.workouts).map(([id, workout]) => (
        <WorkoutItem
          key={id}
          id={id}
          image={workout.image}
          title={workout.title}
          radio={workout.radio}
          checkbox={workout.checkbox}
          description={workout.description}
          setLoadedWorkouts={props.setLoadedWorkouts}
        />
      ))}
    </ul>
  );
}

export default WorkoutsList;
