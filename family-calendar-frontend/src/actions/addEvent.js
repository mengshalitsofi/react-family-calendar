import { EventObject } from "../calendar/EventObject"

export default function addEvent(event) {
    return function(dispatch) {
      fetch("http://localhost:3001/events", {
        method: "POST",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({event: event})
      }).then(r => r.json())
      .then(event => 
        { 
          if (event.message) {
            // Error handling
            alert(event.message)
          }
          else {
            dispatch({type: "ADD_EVENT", payload: new EventObject(event.data.attributes)})
          }
        })
    }  
  }
  