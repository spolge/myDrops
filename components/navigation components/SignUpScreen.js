import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import {useNavigation } from "@react-navigation/native";
import image from '../../assets/temporaryLogo.webp';

export default function SignUpScreen() {
  const navigation = useNavigation();

  const handleSignUpPress = () => {
    navigation.navigate('Main');
  };
  return (
    <View style={styles.container}>
      <Image source={image} style ={{width: 100, height: 100 }}/>
      <Text style= {styles.heading}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="password"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
      />
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
  heading: {
    marginBottom: 4,

  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
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