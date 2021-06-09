import {useSelector, useDispatch} from 'react-redux'
import deleteEvent from '../actions/deleteEvent'
import { Link } from 'react-router-dom'
import EventForm from './EventForm'


export default function Event(props) {
  const events = useSelector(function(state) {return state.events})
  const event = events.find(e => e.id === parseInt(props.match.params.id))
  const isEdit = props.match.params.action && props.match.params.action === "edit"
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteEvent(event.id))
    props.history.push("/events")
  }

  return (
        <>
          {event && isEdit &&
          <>
            <EventForm Event={event} />
            <Link to={`/events/${event.id}`}>Back</Link>
            </>
          }
          {event && !isEdit &&
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