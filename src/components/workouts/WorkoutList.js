import WorkoutItem from './WorkoutItem';
import classes from './WorkoutList.module.css';

function WorkoutsList(props) {
    return (
    <ul className={classes.list}>
        {props.workouts.map((workout) => (
        <WorkoutItem 
        key={workout.id} 
        id={workout.id} 
        image={workout.image} 
        title={workout.title}
        description={workout.description}
         />))}
    </ul>
    );
}

export default WorkoutsList;