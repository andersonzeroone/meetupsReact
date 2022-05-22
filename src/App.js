import { Route, Switch } from 'react-router-dom'


import AllMeetups from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetup';
import FavoriteMeetups from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/'>
          <AllMeetups />
        </Route>


        <Route path='/new-meetup'>
          < NewMeetups />
        </Route>


        <Route path='/favorites'>
          <FavoriteMeetups />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
