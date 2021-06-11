import CalendarDayView from './CalendarDayView.js'

function getDayElement(year, month, day, events) {
    return (
        <td key={"td" + day}>          
            <CalendarDayView key={"cdv" + day} day={day} month={month} year={year} 
                events={events.filter(e => e.day === day)} />
        </td>
    )
}

function getCalendarRow(year, month, days, events) {
    return (<tr key={days[0]}>{days.map(day => getDayElement(year, month, day, events))}</tr>)
}

export default function MonthlyView(props) {

    const month = props.month;
    const year = props.year;

    // check how many empty cells to put    
    // check which day is the first day of the month
    const firstDay = new Date(year, month, 1).getDay(); // if firstDay=0 it's Sunday, 1 is Monday, 2 is Tuesday...
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) {
        days.push(-1-i); // making all the placeholders negative
    }

    for (let i = 0; i < daysInMonth ; i++) {
        days.push(i);
    }                        

    const elements = [];
    elements.push(getCalendarRow(year, month, days.slice(0, 7), props.events));
    elements.push(getCalendarRow(year, month, days.slice(7, 14), props.events));
    elements.push(getCalendarRow(year, month, days.slice(14, 21), props.events));
    elements.push(getCalendarRow(year, month, days.slice(21, 28), props.events));
    if (days.length > 28) {
        elements.push(getCalendarRow(year, month, days.slice(28, 35), props.events));
    }
    if (days.length > 35) {
        elements.push(getCalendarRow(year, month, days.slice(35), props.events));
    }

    return (
        <>
            <p/>
            <table className="Monthly-view" border="1">
                <thead>
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
                </thead>
                <tbody>
                    {
                        elements
                    }
                </tbody>
            </table>
        </>
    )
}