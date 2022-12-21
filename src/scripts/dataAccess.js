/*
json-server database.json -p 8088 -w
*/

const reservationInfo = {
    clowns: [],
    reservationRequests: [],
    bookings: []
}

const mainContainer = document.querySelector("#container")

const API = "http://localhost:8088"

export const fetchReservationRequests = () => {
    return fetch(`${API}/reservationRequests`)
        .then(response => response.json())
        .then(
            (reservationRequests) => {
                // Store the external state in application state
                reservationInfo.reservationRequests = reservationRequests
            }
        )
}

export const getReservationRequests = () => {
    return [...reservationInfo.reservationRequests]
}

export const getClowns = () => {
    return [...reservationInfo.clowns]
}

export const getBookings = () => {
    return [...reservationInfo.bookings]
}

export const saveReservationRequest = (reservationRequests) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reservationRequests)
    }
    const mainContainer = document.querySelector("#container")
    //dispatch the custom event after the POST operation has been completed
    return fetch(`${API}/reservationRequests`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const deleteReservationRequest = (id) => {
    return fetch(`${API}/reservationRequests/${id}`, { method: "DELETE" })
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
        )
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (data) => {
                reservationInfo.clowns = data
            }
        )
}
export const saveBookings = (bookings) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bookings)
    }
    const mainContainer = document.querySelector("#container")
    //dispatch the custom event after the POST operation has been completed
    return fetch(`${API}/bookings`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}


export const fetchBookings = () => {
    return fetch(`${API}/bookings`)
        .then(response => response.json())
        .then(
            (data) => {
                // Store the external state in application state
                reservationInfo.bookings = data
            }
        )
}