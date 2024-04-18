import { StyleSheet, Text, View, ScrollView  } from 'react-native';

export default function MyDrops() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.heading}>Users EyeDrops</Text>
      <ScrollView style = {styles.mymedlist}>
        


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
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    width: '100%',
    height: '100%'
  }
});
