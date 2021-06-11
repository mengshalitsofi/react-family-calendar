import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import fetchEvents from '../actions/fetchEvents'
import Events from './Events'
import Event from './Event'
import EventForm from './EventForm'

class CalendarContainer extends Component {

    componentDidMount() {
        // load all the events once, after the Container is created
        this.props.fetchEvents()
    }

    // this class is the container for all the stuff we want to show
    // based on the route.
    render() {
        return (
          <>
            <Switch>
              {/* New event */}
              <Route path="/events/new/:year/:month/:day">
                <EventForm /> 
              </Route>   
              {/* Edit event */}
              <Route path='/events/:id/:action' render={(routerProps) => <Event {...routerProps}/>}/>
              {/* Show event */}
              <Route path='/events/:id' render={(routerProps) => <Event {...routerProps}/>}/>
              {/* Show all events (main view) */}
              <Route exact path="/events">
                <Events events={this.props.events} />
              </Route>
            </Switch>
          </>
        )
    }

}

// Get the fetchEvents function and attach it to the Props
export default connect(null, {fetchEvents})(CalendarContainer)