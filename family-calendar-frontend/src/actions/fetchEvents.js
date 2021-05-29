import { EventObject } from "../calendar/EventObject"

export default function fetchEvents() {
    return (dispatch) => {        
      fetch("http://localhost:3001/events")
      .then(function(response) {
        return response.json()
      })
      .then((eventsArray) => {
        dispatch({type: "FETCH_EVENTS", payload: eventsArray.map(e => new EventObject(e))})
      })
    }
  }
  