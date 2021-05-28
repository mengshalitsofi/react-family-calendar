export default function MonthAndYear(props) {

    return (
        <>
            { /* I need to add 1 to the month since the months are 0-11 and not 1-12 */}
            { props.month + 1 } / { props.year } 
        </>
    )
}