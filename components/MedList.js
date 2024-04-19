import { StyleSheet, Text, View, ScrollView, TextInput,TouchableOpacity,  } from 'react-native';
import React, {useEffect, useState} from 'react';
import Medications from './Medications';
import {useNavigation, useRoute  } from "@react-navigation/native";

const url = 'http://10.10.22.37:3000/medications';

export default function MedList() {
    const [medications, useMedications] = useState([]);

   const getMedications = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      useMedications(json)
    } catch (error) {
      console.error(error);
    } 
  };

  useEffect(() => {
    getMedications();
  }, []);
  
  return (
     <View style={styles.container}>
      <Text style={styles.heading}>Medications</Text>
       <TextInput
        style={styles.input}
        placeholder="Search..."
      />
      <ScrollView style={styles.mymedlist}>
        {medications.map((medication) => <Medications key = {medication._id} medication = {medication}></Medications>)}
      </ScrollView>
      {/* <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Add Medication</Text>
      </TouchableOpacity> */}
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    width: 120,
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
