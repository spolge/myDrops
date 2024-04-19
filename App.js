import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from 'react'
import SignInScreen from './components/navigation components/SignInScreen';
import SignUpScreen from './components/navigation components/SignUpScreen';
import WelcomeScreen from './components/navigation components/WelcomeScreen';
import MainNavigator from './components/navigation components/MainNavigator';


export default function App() {
  const Stack = createStackNavigator();
  return (
    //add area safe view
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
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
