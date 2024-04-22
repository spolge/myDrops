import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import image from '../assets/temporaryBottle.webp'
import { Ionicons } from '@expo/vector-icons';


export default function MyDropsEdit({route: {params: {med}}}) {
  return (
   <View style = {styles.layout}>
    <Image source={image} style = {styles.image} />
    <View style = {styles.container}>
    <Text style ={styles.text}>{med.name}</Text>
    <Text style ={styles.text}>take this drop {med.frequency} times daily</Text>
    <Text style ={styles.text}>Which Eye</Text>
    <View>
    <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Edit Drops</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="trash-bin" size={24} color="black" />
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
  },
  image: {
    borderRadius: 12,
    height: 100,
    width: 100,
  },
  container: {
    flexDirection: 'column'
  },
  text: {
    marginTop: 8
  },
  button: {
    backgroundColor: '#00B4D8',
    padding: 10,
    borderRadius: 5,
    marginBottom: 12,
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
