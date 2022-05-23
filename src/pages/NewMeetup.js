
import { useHistory } from 'react-router-dom';
import NewMeetupForm from './../components/meetups/NewMeetupForm'


function NewMeetups() {

  const history = useHistory();

  function addMeetupHandler(meetupData) {

    fetch('https://meetupreactjs-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'content-type': 'application/json'
      }
    }).then(() => {
      history.replace('/');
    })
  }
  return (
    <section>
      <h1>NewMeetups Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetups;