import { Link } from "react-router-dom";

export default function CalendarDayView(props) {

    if (props.day === -1) {
        return <></>
    }

    const day = props.day;

    return (
        <>
            { day+1 }

            <p />
            { !!props.events && props.events.length > 0 ? 
                props.events.map(e => 
                <><Link to={`/events/${e.id}`}>{e.title}</Link><p/></>) : "No Events"}
            <p />
            <a href="/events/new">Add</a>
        </>
    )
}