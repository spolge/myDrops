import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { LineChart } from 'react-native-chart-kit';
import { ScrollView } from 'react-native-gesture-handler';

export default function MonitorPressure() {
  const [pressure, setPressure] = useState([]);
  const [date, setDate] = useState('');
  const [rightEyePressure, setRightEyePressure] = useState('');
  const [leftEyePressure, setLeftEyePressure] = useState('');

  const navigation = useNavigation();

  const url1 = 'http://10.10.22.37:3000/pressure';
  const url2 = 'http://10.10.22.37:3000/pressure/add';

  const getPressure = async () => {
    try {
      const response = await fetch(url1);
      const json = await response.json();
      setPressure(json)
    } catch (error) {
      console.error(error);
    } 
  };

  const handleSubmit = async () => {
    await fetch(url2, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: date,
        rightEye: rightEyePressure,
        leftEye: leftEyePressure
      }),
    });
    navigation.navigate('Monitor Pressure');
  };

  useFocusEffect(
    useCallback(() => {
      getPressure();
    }, [])
  );

  let newArray = pressure.map(entry => entry.date)
  let rightArray = pressure.map(entry => entry.rightEye)
  let leftArray = pressure.map(entry => entry.leftEye)

  const rightEye = {
    labels: newArray,
    datasets: [
      {
        data: rightArray,
        strokeWidth: 2,
      },
    ],
  };

  const leftEye = {
    labels: newArray,
    datasets: [
      {
        data: leftArray,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <ScrollView>
      <Text>IntraOcular Pressure Monitor</Text>
      <Text>Right Eye</Text>
      {pressure.length < 1 ? <Text>Pressures Loading</Text> :
        <LineChart
          data={rightEye}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      }

      <Text>Left Eye</Text>
      {pressure.length < 1 ? <Text>Pressures Loading</Text> :
        <LineChart
          data={leftEye}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      }

      <TextInput
        style={styles.input}
        onChangeText={text => setRightEyePressure(text)}
        value={rightEyePressure}
        placeholder="Right Eye Pressure"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setLeftEyePressure(text)}
        value={leftEyePressure}
        placeholder="Left Eye Pressure"
        keyboardType="numeric"
      />

      <RNPickerSelect
        placeholder={{
          label: 'Which Month?',
          value: null,
        }}
        onValueChange={(value) => setDate(value)}
        items={[
          { label: 'Jan', value: 'Jan' },
          { label: 'Feb', value: 'Feb' },
          { label: 'Mar', value: 'Mar' },
          { label: 'Apr', value: 'Apr' },
          { label: 'May', value: 'May' },
          { label: 'Jun', value: 'Jun' },
          { label: 'Jul', value: 'Jul' },
          { label: 'Aug', value: 'Aug' },
          { label: 'Sep', value: 'Sep' },
          { label: 'Oct', value: 'Oct' },
          { label: 'Nov', value: 'Nov' },
          { label: 'Dec', value: 'Dec' },
        ]}
        style={pickerSelectStyles}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
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
    marginBottom: 12,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
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
