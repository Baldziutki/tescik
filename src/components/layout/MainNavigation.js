import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  const [weather,setWeather] = useState("-");

  async function weatherBalloon(cityID) {
    var key = "8e69d0c3663136071120c528fa0ed08a";
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?id=" +
        cityID +
        "&appid=" +
        key
    )
    const data = await response.json();
    const place = data.name;
    const celcius = Math.round(Number(data.main.temp) - 273.15);
    return String(celcius)
  }
  
  useEffect(() => {
    (async () => {
      setWeather(await weatherBalloon(765876)); 
    })()
  }, [])

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Your Training App</div>
      <div className={classes.logo}>
        <span>Lublin {weather}°C</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Workouts</Link>
          </li>
          <li>
            <Link to='/new-workout'>Add New Workout</Link>
          </li>
          <li>
            <Link to='/favorites'>
              My Favorites
              <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;