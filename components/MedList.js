import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import Medications from './Medications';

const url = 'http://10.10.22.37:3000/medications';

export default function MedList() {
  const [medications, setMedications] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const getMedications = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setMedications(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMedications();
  }, []);

  const filteredMedications = medications.filter((medication) =>
    medication.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Medications</Text>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <ScrollView style={styles.mymedlist}>
        {filteredMedications.map((medication) => (
          <Medications key={medication._id} medication={medication} />
        ))}
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    width: 120,
  },
});
