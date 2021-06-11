import { Link } from "react-router-dom";
import React from "react";

export default function CalendarDayView(props) {

    if (props.day < 0) {
        return <></>
    }

    const day = props.day;

    return (
        <React.Fragment key={"rf1-" + props.day}>
            { day + 1 /* display the day number in the calendar */ }

            <p />

            { props.events.length > 0 ? 
                props.events.map(e => 
                <React.Fragment key={`rf2-${props.day}-${e.id}`}>
                    <Link to={`/events/${e.id}`}>{e.title}</Link>
                    <p/>
                </React.Fragment>) 
                : "No Events"}
            <p />
            <Link to={`/events/new/${props.year}/${props.month}/${props.day}`}>Add</Link>
        </React.Fragment>
    )
}