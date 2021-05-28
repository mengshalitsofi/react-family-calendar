export default function addEvent(event) {
    return function(dispatch) {
      fetch("http://localhost:3001/events", {
        method: "POST",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({event: event})
      }).then(r => r.json())
      .then(event => dispatch({type: "ADD_EVENT", payload: event}))
    }  
  }
  