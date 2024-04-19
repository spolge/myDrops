import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation } from "@react-navigation/native";
import UsersMedications from './UsersMedications';
import React, {useEffect, useState} from 'react';

const url = 'http://10.10.22.37:3000/patients';


export default function MyDrops() {
    const [patients, usePatients] = useState([]);

   const getPatients= async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      usePatients(json)
    } catch (error) {
      console.error(error);
    } 
  };

  useEffect(() => {
    getPatients();
  }, []);

  console.log(patients)

  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Users EyeDrops</Text>
      <ScrollView style={styles.mymedlist}>
        <UsersMedications></UsersMedications>
      
      </ScrollView>
    </View> 
      
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
  button: {
    backgroundColor: '#00B4D8',
    padding: 10,
    borderRadius: 5,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
