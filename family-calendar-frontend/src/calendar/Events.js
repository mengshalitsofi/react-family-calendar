import { Component } from "react";
import {connect} from 'react-redux'
import MonthAndYear from "./MonthAndYear";
import MonthlyView from "./MonthlyView";

class Events extends Component {
    render() {
        const now = new Date();
        const month = now.getMonth();
        const year = now.getFullYear();            

        console.log("props:")
        console.log(this.props.events ? this.props.events.length : "null")
    
        return (
            <>
                <br />
                <MonthAndYear month={month} year={year}/>
                {/* Filter all the events to only get the ones for this month
                    and year and pass them to MonthlyView */}
                <MonthlyView month={month} year={year} 
                    events={this.props.events.filter(e => e.month === month && e.year === year)}/>
            </>
        )
    }
}

// convert all the events that we get from the state to props.events
function mapStateToProps(state) {
    console.log("mapStateToProps")
    console.log(state.events ? state.events.length : "null")
    return {events: state.events}
  }
  
  
export default connect(mapStateToProps)(Events)
  