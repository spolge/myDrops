import { StyleSheet, Text, View } from 'react-native';

export default function MedList() {
  return (
    <View style = {styles.container}>
      <Text>MedList Screen</Text>
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
});
