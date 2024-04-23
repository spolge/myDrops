import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {useNavigation, useRoute  } from "@react-navigation/native";
import MonitorAmsler from './MonitorAmsler';
import MonitorInstructions from './MonitorInstructions';


export default function MonitorHome() {
  const navigation = useNavigation();

  function navigateToInstruction () {
    navigation.navigate('Drop Instructions');
  }

  function navigateToAmsler () {
    navigation.navigate('Amsler Grid');
  }

   function navigateToPressure () {
    navigation.navigate('Monitor Pressure');
  }
 

  return (
    <View style = {styles.container}>

      <TouchableOpacity style={styles.button} onPress={navigateToInstruction}>
        <Text style={styles.buttonText}>How do I use my eye drops?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToAmsler}>
        <Text style={styles.buttonText}>Vision Monitoring</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToPressure}>
        <Text style={styles.buttonText}>Eye pressure tracker</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center'
  },
   button: {
    backgroundColor: '#00B4D8',
    padding: 10,
    borderRadius: 5,
    marginBottom: 12,
    marginTop: 16,
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
});