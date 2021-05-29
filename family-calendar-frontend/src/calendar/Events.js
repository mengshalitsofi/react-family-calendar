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
                <MonthAndYear month={month} year={year}/>
                <MonthlyView month={month} year={year} 
                    events={this.props.events.filter(e => e.month === month && e.year === year)}/>
            </>
        )
    }
}

function mapStateToProps(state) {
    console.log("mapStateToProps")
    console.log(state.events ? state.events.length : "null")
    return {events: state.events}
  }
  
  
export default connect(mapStateToProps)(Events)
  