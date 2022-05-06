import axios from 'axios';
const USER_URL = 'http://10.0.2.2:8080/admin/users/';
const TRIP_URL = 'http://10.0.2.2:8080/admin/trips';
const FLIGHT_URL = 'http://10.0.2.2:8080/user/all-flights';

export async function fetchUsers() {
    const response = await axios.get(USER_URL);
    return response.data;
}
export function postUser(userData){
   axios.post(USER_URL, userData)
}
export function updateUser(userData){
    axios.put(USER_URL, userData)
}
export function deleteUser(id){
    axios.delete(USER_URL + id)
}

export async function fetchTrips() {
    const response = await axios.get('http://10.0.2.2:8080/admin/trips');
    return response.data;
}

export function postTrip(tripData){
   axios.post('http://10.0.2.2:8080/user/trips', tripData)
}

export function updateTrip(tripData){
    axios.put('http://10.0.2.2:8080/admin/users', tripData)
}
export function deleteTrip(tripId){
    axios.delete('http://10.0.2.2:8080/admin/users/${tripId}')
}

export async function fetchFlights() {
    const response = await axios.get(FLIGHT_URL);
    return response.data;  
}

export function postFlight(flightData){
   axios.post(FLIGHT_URL, flightData)
}

export function updateFlight(flightData){
    axios.put(FLIGHT_URL + '/${flightData.tripId}', flightData)
}
export function deleteFlight(flightId){
    axios.delete(FLIGHT_URL + '/${flightId}')
}