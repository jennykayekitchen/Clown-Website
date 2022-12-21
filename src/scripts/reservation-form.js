import { saveReservationRequest } from "./dataAccess.js"


//Build the HTML that contains input fields for all of the information that needs 
//to be collected for a person to reserve a clown for a birthday party.
export const ReservationForm = () => {
    let html = `
    <div class="field">
    <label class="label" for="parentName">Parent's Name:</label>
    <input type="text" name="parentName" class="input" />
    </div>
    <div class="field">
    <label class="label" for="parentPhone">Parent's Phone Number:</label>
    <input type="text" name="parentPhone" class="input" />
    </div>
    <div class="field">
    <label class="label" for="childName">Birthday Boy or Girl's Name:</label>
    <input type="text" name="childName" class="input" />
    </div>
    <div class="field">
    <label class="label" for="reservationDate">Desired Party Date</label>
    <input type="date" name="reservationDate" class="input" />
    </div>
    <div class="field">
    <label class="label" for="reservationLength">Length of Party (in Hours):</label>
    <input type="number" name="reservationLength" class="input" />
    </div>
    <div class="field">
    <label class="label" for="numAttending">Number of Children Attending:</label>
    <input type="number" name="numAttending" class="input" />
    </div>
    
    <button class="button" id="submitReservationRequest">Submit Reservation Request</button>
    `
    
    return html
}
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservationRequest") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userParentPhone = document.querySelector("input[name='parentPhone']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userReservationDate = document.querySelector("input[name='reservationDate']").value
        const userReservationLength = document.querySelector("input[name='reservationLength']").value
        const userNumAttending = document.querySelector("input[name='numAttending']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            parentPhone: userParentPhone,
            childName: userChildName,
            reservationDate: userReservationDate,
            reservationLength: userReservationLength,
            numAttending: userNumAttending
        }

        // Send the data to the API for permanent storage
        saveReservationRequest(dataToSendToAPI)
    }
})