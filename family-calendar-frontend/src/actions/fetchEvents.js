import { EventObject } from "../calendar/EventObject"

// get all the events from the backend
export default function fetchEvents() {
    return (dispatch) => {        
      fetch("http://localhost:3001/events")
      .then(function(response) {
        return response.json()
      })
      .then((eventsArray) => {
        // map the json array that was returned into the EventObject class
        // then call the FETCH_EVENTS method that the reducer will work on
        dispatch({type: "FETCH_EVENTS", payload: eventsArray.map(e => new EventObject(e))})
      })
      .catch((error) => {alert("Error getting events: " + error)})
    }
  }
  