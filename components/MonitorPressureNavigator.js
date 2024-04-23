import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import {useNavigation, useRoute  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MonitorPressure from './MonitorPressure';
import MonitorPressureEdit from './MonitorPressureEdit';

export default function MonitorPressureNavigator() {
  const Stack = createStackNavigator();
 

  return (
    <Stack.Navigator >
        <Stack.Screen name="Monitor Pressure" component={MonitorPressure}/>
        <Stack.Screen name="Input Pressure" component={MonitorPressureEdit}/>
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