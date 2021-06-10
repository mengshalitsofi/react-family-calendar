// used to convert the json objects from the backend to a nice class with numbers instead of strings
export class EventObject {
    constructor (event) {
        this.id = parseInt(event.id, 10)
        this.day = parseInt(event.day, 10)
        this.month = parseInt(event.month, 10)
        this.year = parseInt(event.year, 10)
        this.description = event.description
        this.title = event.title
    }
}