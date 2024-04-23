import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import UsersMedications from './UsersMedications';
import React, {useEffect, useState, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import NoMedSkeleton from './noMedSkeleton';

const url = 'http://10.10.22.37:3000/patients/66229daedf1438199990caff';


export default function MyDrops() {
    const [patient, setPatient] = useState(null);
    const [medArr, setMedArr] = useState([]);


   const getPatient= async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setPatient(json)
    } catch (error) {
      console.error(error);
    } 
  };

  useFocusEffect(useCallback(
    () => {
    getPatient();
  }, []
  ))
  
  useFocusEffect(useCallback(
    ()=>{
    if (patient) {
      setMedArr(patient.medication);
    }
  }, [patient]))
        
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SPolges EyeDrops</Text>
      <ScrollView style={styles.mymedlist}>
      
        {medArr.length<1? (
        <NoMedSkeleton/>
        )
        : medArr.map((med) => <UsersMedications key = {med._id} med = {med} ></UsersMedications>)}
      
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
    fontWeight: '600'
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
