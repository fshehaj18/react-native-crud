import React, {useState} from "react";
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import {postUser} from '../util/http';
import {fetchUsers} from '../util/http';


function CreateFlight(props){
  
 const [state, setState] = useState({origin: "", destination: "", arrivalDate: "", departureDate: ""});

  const pressHandler = () => {
    fetchUsers()
}
return (
    <View >
      <Text > Create flight Form </Text>
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
          placeholder="Arrival Date"
          onChangeText={(text) => setState(prev => ({...prev, arrivalDate: text}))}
        />
      <Button
        title="Create Trip"
        onPress={pressHandler} 
        color="green"
      />
    </View>
  );
}
export default CreateFlight;

const styles = StyleSheet.create({
    form: {
        marginTop:80
    }
})