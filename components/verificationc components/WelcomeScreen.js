import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {useNavigation } from "@react-navigation/native";



export default function WelcomeScreen(props) {
  const navigation = useNavigation()

  const handleSignInPress = () => {
    navigation.navigate('SignIn')
  };

  const handleSignUpPress = () => {
    navigation.navigate('SignUp')
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleSignInPress}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#00B4D8',
    padding: 10,
    borderRadius: 5,
    marginBottom: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
