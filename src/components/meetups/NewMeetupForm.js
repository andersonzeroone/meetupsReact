import { useRef } from 'react'
import Card from './../ui/Card';

import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {

  const titleInput = useRef();
  const imageInput = useRef();
  const descriptionInput = useRef();
  const addressInput = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInput.current.value;
    const enteredImage = imageInput.current.value;
    const enteredDescription = descriptionInput.current.value;
    const enteredAddress = addressInput.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
      address: enteredAddress
    }

    props.onAddMeetup(meetupData)
  }


  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInput} />
        </div>

        <div className={classes.control}>
          <label htmlFor='image'>Meetup image</label>
          <input type='url' required id='image' ref={imageInput} />
        </div>



        <div className={classes.control}>
          <label htmlFor='address'>Meetup address</label>
          <input type='text' required id='address' ref={addressInput} />
        </div>

        <div className={classes.control}>
          <label htmlFor='description'>Meetup description</label>
          <textarea required id='description' rows={9} ref={descriptionInput} />
        </div>

        <div className={classes.actions}>
          <button>Add meetup</button>
        </div>

      </form>
    </Card>
  )
}

export default NewMeetupForm;