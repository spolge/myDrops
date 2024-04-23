import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import image from '../assets/singledrop.webp';

export default function MyDropsEdit({ route: { params: { med } } }) {
  const navigation = useNavigation();
  
  const [frequency, setFrequency] = useState('');
  const [eye, setEye] = useState('');

  const url = 'http://10.10.22.37:3000/medications/delete';
  const putUrl = 'http://10.10.22.37:3000/medications/edit';

  const deleteMed = async () => {
    await fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(med),
    });
    navigation.navigate('myDrops');
  };
  

  const handleSubmit = async () => {
    await fetch(putUrl, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: med.name,
        frequency: frequency,
        eye: eye
      }),
    });
    navigation.navigate('myDrops');
  };
    

  return (
    <View style={styles.layout}>
      <Image source={image} style={styles.image} />
      <View style={styles.container}>
        <View style={styles.titleDeleteContainer}>
          <Text style={styles.textTitle}>{med.name}</Text>
          <TouchableOpacity onPress={deleteMed}>
            <Ionicons name="trash-bin" size={24} color="black" marginRight={8} />
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => setFrequency(text)}
            value={frequency}
            placeholder="Daily Frequency"
            keyboardType="numeric"
          />
          <RNPickerSelect
            placeholder={{
              label: 'Which eye?',
              value: null,
            }}
            onValueChange={(value) => setEye(value)}
            items={[
              { label: 'Right', value: 'Right' },
              { label: 'Left', value: 'Left' },
              { label: 'Both', value: 'Both' },
            ]}
            style={pickerSelectStyles}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    marginHorizontal: 24,
    flexDirection: 'row',
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    height: '95%',
    position: 'relative',
    backgroundColor: 'white'
  },
  image: {
    borderRadius: 12,
    height: 130,
    width: 100,
    flex: 1,
  },
  titleDeleteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    flexDirection: 'column',
    flex: 2,
  },
  textTitle: {
    marginTop: 8,
    fontWeight: '700',
    fontSize: 24,
  },
  text: {
    marginTop: 8,
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '90%',
  },
  button: {
    backgroundColor: '#00B4D8',
    padding: 10,
    borderRadius: 5,
    marginBottom: 12,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }, 
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, 
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, 
  },
});
