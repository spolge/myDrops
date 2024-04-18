import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import myDrops from '../MyDrops';
import medList from '../MedList';
import Calendar from '../Calendar';
import settings from '../Settings';

const Tab = createBottomTabNavigator();


export default function MainNavigator() {
  return (
    <Tab.Navigator>
    <Tab.Screen name='myDrops' component={myDrops} options={{ headerShown: false }}/>
    <Tab.Screen name='Medication List' component={medList} options={{ headerShown: false }}/>
    <Tab.Screen name='Calendar' component={Calendar} options={{ headerShown: false }}/>
    <Tab.Screen name='Settings' component={settings} options={{ headerShown: false }}/>
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
