import { Route, Routes } from 'react-router-dom';

import AllWorkoutsPage from './pages/AllWorkouts';
import NewWorkoutPage from './pages/NewWorkout';
import FavoritesWorkouts from './pages/Favorites';
import EditWorkoutPage from './pages/EditWorkout';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllWorkoutsPage />} />
        <Route path="/new-workout" element={<NewWorkoutPage />} />
        <Route path="/favorites" element={<FavoritesWorkouts />} />
        <Route path="/edit/:id" element={<EditWorkoutPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
