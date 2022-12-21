import { fetchClowns, fetchReservationRequests, fetchBookings } from "./dataAccess.js"
//import { ReservationForm } from "./reservation-form.js"
import { ClownBookings } from "./clown-booking.js"



const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservationRequests()
        .then(() => fetchClowns())
        .then(() => fetchBookings())
        .then(
            () => {
                mainContainer.innerHTML = ClownBookings()
            }
        )
}

render()

//listen for the custom event and invoke the render() function to build all the HTML again.
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)