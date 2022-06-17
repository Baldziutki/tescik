import { Route, Routes } from 'react-router-dom';

import AllWorkoutgPage from './pages/AllWorkouts';
import NewWorkoutPage from './pages/NewWorkout';
import FavoritesWorkouts from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllWorkoutgPage />} />
        <Route path="/new-workout" element={<NewWorkoutPage />} />
        <Route path="/favorites" element={<FavoritesWorkouts />} />
      </Routes>
    </Layout>
  );
}

export default App;