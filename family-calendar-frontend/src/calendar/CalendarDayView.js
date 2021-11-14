import { Link } from "react-router-dom";
import React from "react";

export default function CalendarDayView(props) {

    // negative day mean it was just a placeholder, no need to display anything
    if (props.day < 0) {
        return <></>
    }

    const day = props.day;

    return (
        <React.Fragment key={"rf1-" + props.day}>
            { day + 1 /* display the day number in the calendar */ }

            <br />

                <div className={props.events.length === 0 ? "Day-View-Empty": ""}>
                { 
                    // if there are any events, map them to a link to the specific event (with the event ID)
                    // and put the event title as the link title. If there are no events, write "No Events"
                    props.events.length > 0 ? 
                        props.events.map(e => 
                        <React.Fragment key={`rf2-${props.day}-${e.id}`}>
                            <Link to={`/events/${e.id}`}>{e.title}</Link>
                            <br/>
                        </React.Fragment>) 
                        : "No Events"
                }
                </div>                    
            <br />
            {/* Link to add a new event. add the year and month and day to the URL 
                so the date of the new event is fixed */}
            <Link to={`/events/new/${props.year}/${props.month}/${props.day}`}>Add</Link>
        </React.Fragment>
    )
}