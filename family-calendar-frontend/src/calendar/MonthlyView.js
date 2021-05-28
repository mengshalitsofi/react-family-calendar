import CalendarDayView from './CalendarDayView.js'

export default function MonthlyView(props) {

    const month = props.month;
    const year = props.year;

    // check how many empty cells to put
    
    // check which day is the first day of the month
    const firstDay = new Date(year, month, 1).getDay();

    // if firstDay=0 it's Sunday, 1 is Monday, 2 is Tuesday...
    const days = [];
    for (let i = 0; i < firstDay; i++) {
        days.push(-1);
    }

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 0; i < daysInMonth ; i++) {
        days.push(i);
    }                        

    const elements = [];
    elements.push(<tr>{days.slice(0, 7).map(day => <td><CalendarDayView day={day} events={props.events.filter(e => e.day === day)} /></td>)}</tr>)
    elements.push(<tr>{days.slice(7, 14).map(day => <td><CalendarDayView day={day} events={props.events.filter(e => e.day === day)}/></td>)}</tr>)
    elements.push(<tr>{days.slice(14, 21).map(day => <td><CalendarDayView day={day} events={props.events.filter(e => e.day === day)}/></td>)}</tr>)
    elements.push(<tr>{days.slice(21, 28).map(day => <td><CalendarDayView day={day} events={props.events.filter(e => e.day === day)}/></td>)}</tr>)
    if (days.length > 28) {
        elements.push(<tr>{days.slice(28, 35).map(day => <td><CalendarDayView day={day} events={props.events.filter(e => e.day === day)}/></td>)}</tr>)
    }
    if (days.length > 35) {
        elements.push(<tr>{days.slice(35).map(day => <td><CalendarDayView day={day} events={props.events.filter(e => e.day === day)}/></td>)}</tr>)
    }

    return (
        <>
            <p/>
            <table className="Monthly-view" border="1">
                <tr>
                    <th>
                        Sunday
                    </th>
                    <th>
                        Monday
                    </th>
                    <th>
                        Tuesday
                    </th>
                    <th>
                        Wednesday
                    </th>
                    <th>
                        Thursday
                    </th>
                    <th>
                        Friday
                    </th>
                    <th>
                        Saturday
                    </th>
                </tr>

                {
                    elements
                }
            </table>
        </>
    )
}