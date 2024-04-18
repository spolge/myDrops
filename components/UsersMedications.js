import { StyleSheet, Text, View, Image} from 'react-native';
import image from '../assets/temporaryBottle.webp'

export default function UsersMedications() {
  return (
   <View style = {styles.layout}>
    <Image source={image} style = {styles.image} />
    <View style = {styles.content}>
      <Text>Medication Name</Text>
      <Text style = {styles.description}>Which Eye</Text>
      <Text style = {styles.description}>How Often</Text>
      <Text style = {styles.description}>reminders</Text>
    </View>
  </View>      
  );
}


const styles = StyleSheet.create({
    layout: {
    marginHorizontal: 24,
    flexDirection: 'row',
    marginVertical: 8,
    // borderWidth: 1,
    // borderColor: 'black',
    // borderStyle: 'solid',
  },
  image: {
    borderRadius: 12,
    height: 100,
    width: 100,
  },
  content: {
    flex: 2,
    padding: 12,
  },
  
  description: {
    fontSize: 12,
    marginTop: 4,
    color: '#280d5F'
  },
});
