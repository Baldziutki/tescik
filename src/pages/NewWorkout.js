import { useNavigate } from "react-router-dom";

import NewWorkoutForm from "../components/workouts/NewWorkoutForm";

function NewWorkoutPage() {
  const navigate = useNavigate();

  /*function addWorkoutHandler(workoutData) {
    fetch(
      "https://projekt-pai-58a0e-default-rtdb.firebaseio.com/workouts.json",
      {
        method: "POST",
        body: JSON.stringify(workoutData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  }*/
  function addWorkoutHandler(workoutData) {
    const workouts = JSON.parse(localStorage.getItem('workouts')??'{}');
    workouts[Math.random().toString(36).slice(2)]=workoutData;
    localStorage.setItem('workouts', JSON.stringify(workouts));

    navigate("/",{replace: true});
  }




  return (
    <section>
      <h1>Add New Workout</h1>
      <NewWorkoutForm onAddWorkout={addWorkoutHandler} />
    </section>
  );
}

export default NewWorkoutPage;
