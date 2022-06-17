import { useEffect, useState} from 'react';

function updateWorkout() {
    fetch(
        "https://projekt-pai-58a0e-default-rtdb.firebaseio.com/workouts.json",
        {
          method: "PUT",
          body: JSON.stringify(workoutData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(() => {
        navigate("/", { replace: true });
      });
    
    
    
    }




export default updateWorkout;