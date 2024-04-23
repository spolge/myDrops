import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome, Feather, FontAwesome6 } from '@expo/vector-icons';
import Monitor from '../MonitorAmsler';
import settings from '../Settings';
import MyDropsNavigator from '../MyDropsNavigator';
import MedListNavigator from '../MedListNavigator';
import MonitorNavigator from '../MonitorNavigator';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='myDrop'
        component={MyDropsNavigator}
        options={{
          tabBarIcon: () => <FontAwesome name="eyedropper" size={24} color="black" />,
          headerShown: false,
          tabBarLabelStyle: { color: 'black' },
        }}
      /> 
    
      <Tab.Screen
        name='Medication List'
        component={MedListNavigator}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="pill" size={24} color="black" />,
          headerShown: false,
          tabBarLabelStyle: { color: 'black' }
        }}
      />
      <Tab.Screen
        name='Monitor'
        component={MonitorNavigator}
        options={{
          tabBarIcon: () => <FontAwesome6 name="eye-low-vision" size={24} color="black" />,
          headerShown: false,
          tabBarLabelStyle: { color: 'black' }
        }}
      />
      <Tab.Screen
        name='Settings'
        component={settings}
        options={{
          tabBarIcon: () => <Feather name="settings" size={24} color="black" />,
          headerShown: false,
          tabBarLabelStyle: { color: 'black' }
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
