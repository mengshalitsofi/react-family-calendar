export default function editEvent(event) {
    
    return function(dispatch) {
  
      fetch(`http://localhost:3001/events/${event.id}`, {
        method: "PATCH",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({event: event})
      }).then(r => r.json())
      .then(list => dispatch({type: "EDIT_EVENT", payload: event}))
      .catch((error) => {alert("Error editing event: " + error)})      
    }
  }  