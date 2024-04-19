import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import {useNavigation, useRoute  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MedList from './MedList';
import MedListEdit from './MedListEdit';

export default function MedListNavigator() {
  const Stack = createStackNavigator();
 

  return (
    <Stack.Navigator >
        <Stack.Screen name="MedList" component={MedList} options={{ headerShown: false }}/>
        <Stack.Screen name="MedListEdit" component={MedListEdit}/>
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