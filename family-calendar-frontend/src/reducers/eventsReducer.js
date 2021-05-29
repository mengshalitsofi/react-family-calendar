export default function eventsReducer(state = {events: []}, action) {
    console.log("eventsReducer")
      switch (action.type) {
        case "ADD_EVENT":
            debugger;
          return {events: [...state.events, action.payload]}
        case "DELETE_EVENT":
          return {events: state.events.filter(event => event.id !== action.payload)}
        case "EDIT_EVENT":
          const editedEventsArray = state.events.map(
              event => event.id === action.payload.id ? action.payload : event)
          return {events: editedEventsArray}
        case "FETCH_EVENTS":
          return {events: action.payload}
        default:
          return state
    }
  }