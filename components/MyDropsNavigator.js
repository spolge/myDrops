import React from 'react';
import { StyleSheet } from 'react-native';
import UsersMedications from './UsersMedications';
import {useNavigation, useRoute  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyDropsEdit from './MyDropsEdit'
import MyDrops from './MyDrops';


export default function MyDropsNavigator() {
  const {params} = useRoute()
  

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator >
        <Stack.Screen name="myDrops" component={MyDrops} options={{ headerShown: false }}/>
        <Stack.Screen name="myDropsEdit" component={MyDropsEdit}/>
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginTop: 48,
  },
  mymedlist: {
    width: '100%',
    height: '100%',
  },
});