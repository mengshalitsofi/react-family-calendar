import {useSelector, useDispatch} from 'react-redux'
import EventForm from './EventForm'
import deleteEvent from '../actions/deleteEvent'


export default function Event(props) {
  const events = useSelector(function(state) {return state.events})
  const event = events.find(e => e.id === parseInt(props.match.params.id))

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteEvent(event.id))
    props.history.push("/events")
  }

  return (
        <>
          {event &&
          <>
          <h1>
              {event.title}              
          </h1>
          <strong>Event Date: </strong>{(event.month + 1) + " / " + (event.day + 1) + " / " + event.year}
          <p />
          {event.description}
          <p />
          </>
          }

          <button onClick={handleDelete}>Delete Event</button>          
          </>
        )
}