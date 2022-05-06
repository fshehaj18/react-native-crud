import React, {useEffect, useState} from "react";
import {View, Text, Button, StyleSheet} from 'react-native';
import { DataTable } from 'react-native-paper';


export default function FlightsList(props){
    const pressHandler = () => {
        props.navigation.navigate('CreateUser')
    }
    const editHandler = () => {
        props.navigation.navigate('CreateUser');
    }
    const createTripHandler = () => {
        props.navigation.navigate('CreateTrip')
    }
    const deleteHandler = (id) => {
        deleteUser(id);
    }   
    const [fetchedUsers, setFetchedUsers] = useState([]);

    useEffect(() => { 
        async function getUsers() {
            const trips = await fetchTrips();
            setFetchedUsers(trips);
        }
            
        getUsers();
        }, []); 
        console.log(fetchedUsers); 
return(
    <View>
        <Text>List of users</Text>
        <Button
    title="Create Trip"
    onPress={createTripHandler} 
  />
  <Button
    title="View Users"
    onPress={pressHandler} 
  />
  <Button
    title="View flights"
    onPress={pressHandler} 
    color="red"
  />
   <View>
  <DataTable>
    <DataTable.Header>
      <DataTable.Title>Id</DataTable.Title>
      <DataTable.Title>Origin</DataTable.Title>
      <DataTable.Title>Destination</DataTable.Title>
      <DataTable.Title>
        Arrival Date
      </DataTable.Title>
      <DataTable.Title>
        Edit
      </DataTable.Title>
      <DataTable.Title>
        Delete
      </DataTable.Title>
    </DataTable.Header>
    {
      fetchedUsers.map(trip => {
      return (
        <DataTable.Row
          key={trip.tripId} // you need a unique key per item
          onPress={() => {
            // added to illustrate how you can make the row take the onPress event and do something
            console.log(`selected account ${trips.tripId}`)
          }}
        >
          <DataTable.Cell>
            {trip.tripId}
          </DataTable.Cell>
          <DataTable.Cell >
            {trip.origin}
          </DataTable.Cell>
          <DataTable.Cell >
            {trip.destination}
          </DataTable.Cell>
          <DataTable.Cell >
            <Button title="Edit" color="green"  onPress={() => editHandler(trip.tripId)}></Button>
          </DataTable.Cell>
          <DataTable.Cell >
            <Button title="Delete" color="red" onPress={() => deleteHandler(trip.tripId)}></Button>
          </DataTable.Cell>
        </DataTable.Row>
    )})}
  </DataTable>
</View>
    </View>
);
}