import {useSelector, useDispatch} from 'react-redux'
import deleteEvent from '../actions/deleteEvent'
import { Link } from 'react-router-dom'
import EventForm from './EventForm'


export default function Event(props) {
  // Get all the events from the store
  const events = useSelector(function(state) {return state.events})

  // Locate the specific event based on the ID in the URL
  const event = events.find(e => e.id === parseInt(props.match.params.id))

  // Check if we're Edit mode or View mode, based on the URL. If it has "edit" action we're in Edit
  // otherwise we're in view.
  const isEdit = props.match.params.action && props.match.params.action === "edit"
  const dispatch = useDispatch()

  // delete the event and redirect to the main view
  const handleDelete = () => {
    dispatch(deleteEvent(event.id))
    props.history.push("/events")
  }

  return (
        <>
          {event && isEdit && // Edit mode
          <>
            <EventForm event={event} />
            <Link to={`/events/${event.id}`}>Back</Link>
            </>
          }
          {event && !isEdit && // View mode
          <>
            <h1>
                {event.title}              
            </h1>
            <strong>Event Date: </strong>{(event.month + 1) + " / " + (event.day + 1) + " / " + event.year}
            <p />
            {event.description}
            <p />

            <button onClick={handleDelete}>Delete Event</button>
            <p></p>          
            <Link to={`/events/${event.id}/edit`}>Edit</Link>
            <p></p>
            <Link to="/events">Back</Link>
            </>
          }
        </>
      )
}