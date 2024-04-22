import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import image from '../assets/temporaryBottle.webp'
import { Ionicons } from '@expo/vector-icons';
import {useNavigation } from "@react-navigation/native";


export default function MyDropsEdit({route: {params: {med}}}) {
  const navigation = useNavigation();

  const url = 'http://10.10.22.37:3000/medications/delete'

  const deleteMed = async () => {
    await fetch(url, {
      method: 'DELETE',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(med)
    });
    console.log('pressed')

    navigation.navigate('myDrops');

  }




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

      <TouchableOpacity onPress={deleteMed}>
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
