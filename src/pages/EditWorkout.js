import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EditWorkoutForm from '../components/workouts/EditWorkoutForm';

function NewWorkoutPage() {
  const navigate = useNavigate();
  const [workout, setWorkout] = useState();
  const { id } = useParams();

  function onEditWorkout(workoutData) {
    const workouts = JSON.parse(localStorage.getItem('workouts') ?? '{}');
    workouts[id] = workoutData;
    localStorage.setItem('workouts', JSON.stringify(workouts));

    navigate('/', { replace: true });
  }

  useEffect(() => {
    const workouts = JSON.parse(localStorage.getItem('workouts') ?? '{}');

    if (!(id in workouts)) {
      setWorkout(false);
      return;
    }

    setWorkout(workouts[id]);
  }, []);

  if (workout === undefined) {
    return <p>Loading...</p>;
  }

  if (workout === false) {
    return <p>Workout does not exist</p>;
  }

  return (
    <section>
      <h1>Edit {workout.title}</h1>
      <EditWorkoutForm workout={workout} onEditWorkout={onEditWorkout} />
    </section>
  );
}

export default NewWorkoutPage;
