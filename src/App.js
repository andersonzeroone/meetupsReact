import { Route, Switch } from 'react-router-dom'


import AllMeetups from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetup';
import FavoriteMeetups from './pages/Favorites';

import Layout from './components/layout/Layout'

function App() {
  return (

    <Layout>

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
    </Layout>
  )
}

export default App;
