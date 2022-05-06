import React, {useState} from "react";
import {Text, StyleSheet, View, TextInput, Button, TouchableOpacity} from 'react-native';
import { green100 } from "react-native-paper/lib/commonjs/styles/colors";
import Input from "../components/Input";
import {postUser} from '../util/http';


function CreateUserView(props){
  
 const [state, setState] = useState({firstName: "", lastName: "", email: "", password:"", roleId: ""});

  const pressHandler = () => {
    postUser(state);
}
return (
    <View style={styles.form}>
      <Text style={styles.title}>Enter details</Text>
      <View style={styles.inputsRow}>
      <Input style={styles.rowInput} label={"First Name"} 
      textInputConfig={{
        placeholder:"First Name",
        onChangeText: (text) => setState(prev => ({...prev, firstName: text}))}
        }/>
            <Input  style={styles.rowInput} label={"Last Name"} 
      textInputConfig={{
        placeholder:"Last Name",
        onChangeText: (text) => setState(prev => ({...prev, lastName: text}))}
        }/>
        </View>
        <View>
             <Input  style={styles.rowInput} label={"Email"} 
      textInputConfig={{
        placeholder:"someone@email.com",
        onChangeText: (text) => setState(prev => ({...prev, email: text}))}
        }/>
        <Input
          secureTextEntry={true}
          label="Password"
          style={styles.input}
          onChangeText={(text) => setState(prev => ({...prev, password: text}))}
        />
         <Input style={styles.rowInput} label={"Role id"} 
      textInputConfig={{
        onChangeText: (text) => setState(prev => ({...prev, roleId: text}))}
        }/>
      <Button 
       title="Add"
       onPress={pressHandler} />

      </View>
    </View>
  );
}
export default CreateUserView;

const styles = StyleSheet.create({
  form: {
      marginTop:40
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue'
  },
  rowInput:{
    flex:1
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: 200,
    }
})