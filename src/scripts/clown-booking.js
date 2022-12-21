//import the list of requests in HTML
import { ReservationForm } from "./reservation-form.js"
//import the HTML input fields
import { Reservations } from "./reservation-requests.js"


//Interpolate HTML form for user requests and the HTML list of requests in the site structure.
export const ClownBookings = () => {
    return `
    <section class="reservationRequestForm">
    </section>
    <h2>Request a Clown</h2>
        ${ReservationForm()}
    <section class="reservationRequests">
        <h2>Current Reservation Requests</h2>
        ${Reservations()}
    </section>
    `
}