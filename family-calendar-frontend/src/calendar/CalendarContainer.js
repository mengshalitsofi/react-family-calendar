import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import fetchEvents from '../actions/fetchEvents'
import Events from './Events'
import Event from './Event'
import EventForm from './EventForm'

class CalendarContainer extends Component {

    componentDidMount() {
        this.props.fetchEvents()
    }

    render() {
        return (
          <>
            <Switch>
              <Route path="/events/new/:year/:month/:day">
                <EventForm /> 
              </Route>   
              <Route path='/events/:id/:action' render={(routerProps) => <Event {...routerProps}/>}/>
              <Route path='/events/:id' render={(routerProps) => <Event {...routerProps}/>}/>
              <Route exact path="/events">
                <Events events={this.props.events} />
              </Route>
            </Switch>
          </>
        )
    }

}

export default connect(null, {fetchEvents})(CalendarContainer)