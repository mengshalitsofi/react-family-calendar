import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import addEvent from '../actions/addEvent'
import editEvent from '../actions/editEvent'

class EventForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        title: (this.props.event ? this.props.event.title : ""), 
        id: (this.props.event ? this.props.event.id : ""),
        description: (this.props.event ? this.props.event.description : ""),
        year: parseInt(this.props.match.params.year, 10),
        month: parseInt(this.props.match.params.month, 10),
        day: parseInt(this.props.match.params.day, 10),
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.props.event) {
        this.props.editEvent(this.state)

    } else {
      const event = {
          title: this.state.title, 
       //   id: Math.floor(Math.random() * Math.floor(100000000)), //??
          description: this.state.description,
          day: this.state.day,
          month: this.state.month,
          year: this.state.year
        }
      this.props.addEvent(event)
      this.props.history.push("/events")
    }
  }

  handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}


  render = () => {
    return (
      <>
        {`${this.state.month + 1} / ${this.state.day + 1} / ${this.state.year}`}
        {this.state.edit}
        <form onSubmit={this.handleSubmit.bind(this)}>
            Title: <input type="text" onChange={this.handleChange} value={this.state.title} name="title"/> <p/>
            Description: <input type="text" onChange={this.handleChange} value={this.state.description} name="description"/> <p />        
            <input type="submit"/>
        </form>
      </>
  )
  }

}

export default withRouter(connect(null, 
    {addEvent: addEvent, editEvent: editEvent})(EventForm))

//connect determines if second arg is a function or an object
  // if the argument is a function, it invokes that function passing in dispatch as arg
  // the returned object from that function becomes props in out component
  //if the argument is an OBJECT connect passes that object as props to the component
      //if those methods return ACTION OBJECTS then dispatch is called for us and that object is passed as the argument
      // if those methods return FUNCTIONS, thunk steps in and the dispatch method is sent to those functions as arguments
