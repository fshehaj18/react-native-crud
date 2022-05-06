import React, {useState} from "react";
import {Text, StyleSheet, View, TextInput, Button, } from 'react-native';
import {postUser} from '../util/http';
import {fetchUsers} from '../util/http';


function CreateTrip(props){
  
    const [state, setState] = useState({origin: "", destination: "", arrivalDate: "", departureDate:""});

  const pressHandler = () => {
    fetchUsers();
}
return (
    <View >
      <Text > Create Trip Form </Text>
      <TextInput
          placeholder="Origin"
          onChangeText={(text) => setState(prev => ({...prev, origin: text}))} 
           />
          <TextInput
          placeholder="Destination"
          onChangeText={(text) => setState(prev => ({...prev, destination: text}))}
           />
        <TextInput
          placeholder="Departure date" 
          onChangeText={(text) => setState(prev => ({...prev, departureDate: text}))}/>
        <TextInput
          secureTextEntry={true}
          placeholder="Arrival Date"
          onChangeText={(text) => setState(prev => ({...prev, arrivalDate: text}))}
        />
      <Button
        title="Create User"
        onPress={pressHandler} 
      />
    </View>
  );
}
export default CreateTrip;