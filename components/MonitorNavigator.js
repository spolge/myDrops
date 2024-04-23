import { StyleSheet } from 'react-native';
import {useNavigation, useRoute  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MonitorAmsler from './MonitorAmsler';
import MonitorInstructions from './MonitorInstructions';
import MonitorHome from './MonitorHome';
import MonitorPressureNavigator from './MonitorPressureNavigator';


export default function MonitorNavigator() {
  const Stack = createStackNavigator();
 

  return (
    <Stack.Navigator >
        <Stack.Screen name="Home" component={MonitorHome} options={{ headerShown: false }}/>
        <Stack.Screen name="Drop Instructions" component={MonitorInstructions}/>
        <Stack.Screen name="Amsler Grid" component={MonitorAmsler}/>
        <Stack.Screen name="Monitor Pressure" component={MonitorPressureNavigator} options={{ headerShown: false }}/>
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