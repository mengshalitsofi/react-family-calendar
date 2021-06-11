export default function eventsReducer(state = {events: []}, action) {
    console.log("eventsReducer")
    // update the redux store for all the event operations
      switch (action.type) {
        case "ADD_EVENT":
          // here the payload is the Event object
          return {events: [...state.events, action.payload]}
        case "DELETE_EVENT":
          // here the payload is the event ID
          return {events: state.events.filter(event => event.id !== action.payload)}
        case "EDIT_EVENT":
          // here the payload is the Event object
          // create a new events array by mapping all of the existing items (except the edited one)
          //   to themselves, and replace the edited one with the new object
          const editedEventsArray = state.events.map(
              event => event.id === action.payload.id ? action.payload : event)
          return {events: editedEventsArray}
        case "FETCH_EVENTS":
          // here the payload is an array of events (EventObject)
          return {events: action.payload}
        default:
          return state
    }
  }