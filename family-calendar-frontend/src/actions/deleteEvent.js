export default function deleteEvent(eventId) {

    return function(dispatch) {
  
      fetch(`http://localhost:3001/events/${eventId}`, {
        method: "DELETE",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
      }).then(r => r.json())
      .then(event => dispatch({type: "DELETE_EVENT", payload: eventId}))
      .catch((error) => {alert("Error deleting event: " + error)})      
    }
  
  }  