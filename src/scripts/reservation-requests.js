import { getReservationRequests, getClowns, saveBookings, deleteReservationRequest } from "./dataAccess.js" 

export const Reservations = () => {
        const reservations = getReservationRequests()
    
        let html = `<ul>${reservations.map(convertRequestToListElement).join("")}</ul>`
        return html
}

export const convertRequestToListElement = (reservation) => {
    const clowns = getClowns()
    
    return `
    <li>
    Party for ${reservation.childName} on ${reservation.reservationDate}.
    <select class="clowns" id="clowns">
    <option value="">Choose</option>
    ${
        clowns.map(
            clown => {
                return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
            }
            ).join("")
        }
        </select>
        <button class="reservation__deny" 
        id="reservation--${reservation.id}">
        Deny
        </button>
        </li>`
    }
    


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
        if (click.target.id.startsWith("reservation--")) {
            const [,reservationId] = click.target.id.split("--")
            deleteReservationRequest(parseInt(reservationId))
        }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [reservationId, clownId] = event.target.value.split("--")


            const bookings = {
                reservationId: parseInt(reservationId),
                clownId: parseInt(clownId),
                date_created: Date.now()
             }


            saveBookings(bookings)
        }
    }
)