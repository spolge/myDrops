import { StyleSheet, View, Text } from 'react-native';
import {useNavigation, useRoute  } from "@react-navigation/native";




export default function MonitorPressure() {
 

  return (
    <View  style= {styles.container}>
      <Text>Hello from monitor pressure</Text>
    </View>
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
});