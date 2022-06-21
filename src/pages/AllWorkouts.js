import { useState, useEffect } from 'react';

import WorkoutList from '../components/workouts/WorkoutList';

function AllWorkoutsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [workouts, setLoadedWorkouts] = useState({});

  /*useEffect(() => {
    fetch("https://projekt-pai-58a0e-default-rtdb.firebaseio.com/workouts.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const workouts = [];

        for (const key in data) {
          const workout = {
            id: key,
            ...data[key],
          };

          workouts.push(workout);
        }

        setIsLoading(false);
        setLoadedWorkouts(workouts);
      });
  }, []);*/

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('workouts') ?? '{}');

    setIsLoading(false);
    setLoadedWorkouts(data);
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Workouts</h1>
      <WorkoutList workouts={workouts} setLoadedWorkouts={setLoadedWorkouts} />
    </section>
  );
}

export default AllWorkoutsPage;
