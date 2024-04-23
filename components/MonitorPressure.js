import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';
import { ScrollView } from 'react-native-gesture-handler';

export default function MonitorPressure() {
  const [pressure, setPressure] = useState([]);
 
  const navigation = useNavigation();

  const url1 = 'http://10.10.22.37:3000/pressure';

  const getPressure = async () => {
    try {
      const response = await fetch(url1);
      const json = await response.json();
      setPressure(json)
    } catch (error) {
      console.error(error);
    } 
  };

  const moveToEdit = () => {
    navigation.navigate('Input Pressure')
  }

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
      <View style = {styles.container}>
       <TouchableOpacity style={styles.button} onPress={moveToEdit}>
        <Text style={styles.buttonText}>Record new intra ocular pressure</Text>
      </TouchableOpacity>
      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
    marginTop: 45,
    width: 300,
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
