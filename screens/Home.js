import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {fetchUsers} from '../util/http';
import { deleteUser } from "../util/http";
import { DataTable } from 'react-native-paper';


export default function Home(props){

    const pressHandler = () => {
        props.navigation.navigate('CreateUser')
    }
   
    const viewTripsHandler = () => {
        props.navigation.navigate('TripsList');
    }
    const optionsPerPage = [2, 3, 4];
    const [fetchedUsers, setFetchedUsers] = useState([]);
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
  
    React.useEffect(() => {
      setPage(0);
    }, [itemsPerPage]);

    useEffect(() => { 
        async function getUsers() {
            const users = await fetchUsers();
            setFetchedUsers(users);
        }
            
        getUsers();
        }, []); 
         
   const editHandler = () => {
        props.navigation.navigate('CreateUser');
    }
    async function deleteHandler(id){
        deleteUser(id);
        const users = await fetchUsers();
            setFetchedUsers(users);
    }
    return(
        <View>
          <View>
            <Button
                title="Create User"
                onPress={pressHandler} 
            />
            <Button
                title="View trips"
                onPress={viewTripsHandler} 
                color="orange"
            />
            <Button
                title="View flights"
                onPress={pressHandler} 
                color="red"
            />
           </View>
       <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Id</DataTable.Title>
          <DataTable.Title>First name</DataTable.Title>
          <DataTable.Title>
            Email
          </DataTable.Title>
          <DataTable.Title>
            Edit
          </DataTable.Title>
          <DataTable.Title>
            Delete
          </DataTable.Title>
        </DataTable.Header>
        {
          fetchedUsers.map(user => {
          return (
            <DataTable.Row
              key={user.id} // you need a unique key per item
              onPress={() => {
                // added to illustrate how you can make the row take the onPress event and do something
                console.log(`selected account ${user.id}`)
              }}
            >
              <DataTable.Cell>
                {user.id}
              </DataTable.Cell>
              <DataTable.Cell >
                {user.firstName}
              </DataTable.Cell>
              <DataTable.Cell >
                {user.email}
              </DataTable.Cell>
              <DataTable.Cell >
                <Button title="Edit" color="green"  onPress={() => editHandler(user.id)}></Button>
              </DataTable.Cell>
              <DataTable.Cell >
                <Button title="Delete" color="red" onPress={() => deleteHandler(user.id)}></Button>
              </DataTable.Cell>
            </DataTable.Row>
        )})}
        <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />
      </DataTable>
    </View>   
  
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });