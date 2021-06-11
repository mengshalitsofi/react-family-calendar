import CalendarDayView from './CalendarDayView.js'

// create a specific cell (TD) for a specific day
// here we also filter the events to only pass this specific day's events to CalendarDayView
function getDayElement(year, month, day, events) {
    return (
        <td key={"td" + day}>          
            <CalendarDayView key={"cdv" + day} day={day} month={month} year={year} 
                events={events.filter(e => e.day === day)} />
        </td>
    )
}

// given a 7-day array, create a table row from them.
// create the TR for the row and then map each day to its own TD using getDayElement
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
    
    // fill an array that looks like this: [-1, -2, -3, -4, 0, 1, 2, 3, 4, ..., 30]
    // all the negative numbers are not real days, they will be the empty cells in the 
    // beginning of the monthly calendar table until we reach the first day of the month (0)

    // fill all the negative days
    const days = [];
    for (let i = 0; i < firstDay; i++) {
        days.push(-1-i); // making all the placeholders negative
    }

    // fill all the positive (real) days in the month
    for (let i = 0; i < daysInMonth ; i++) {
        days.push(i);
    }                        

    // For every 7-days, create a new row in the table. 
    // There can be up to 6 rows, depending on what day the month starts with and how
    // many days are in the month.
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

    // Display the calendar table. Write the header line with all the day names,
    // and add all the Elements we just created above
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