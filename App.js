/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import CreateUserView from './screens/CreateUser';
import { StatusBar } from 'expo-status-bar'
import CreateTrip from './screens/CreateTrip';
import CreateFlight from './screens/CreateFlight';
import TripsList from './screens/Trips';
import FlightsList from './screens/Flights';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from './constants/styles';
import Ionicons from '@expo/vector-icons';



function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500, 
      }}
    >
       <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          
        }}
      />
      <BottomTabs.Screen
        name="TripsList"
        component={TripsList}
        options={{
          title: 'Trips',
          tabBarLabel: 'Trips',
          
          
        }}
      />
       <BottomTabs.Screen
        name="FlightsList"
        component={FlightsList}
        options={{
          title: 'Flights',
          tabBarLabel: 'Flights',
         
        }}
      />
    </BottomTabs.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

export default function App() {
  return (
    <><StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator>
           <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
        <Stack.Screen name="CreateUser" component={CreateUserView} />
        <Stack.Screen name="CreateTrip" component={CreateTrip}  />
        <Stack.Screen name="CreateFlight" component={CreateFlight} />
        
      </Stack.Navigator> 
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 6,
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
});