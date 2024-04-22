import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import image from '../assets/temporaryBottle.webp';
import {useNavigation } from "@react-navigation/native";


export default function MedListEdit({route: {params: {medication}}}) {
   const navigation = useNavigation();

  const url = 'http://10.10.22.37:3000/medications/add'


 const  addToMyDrops = async () => {
   let response = await fetch(url, {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(medication)
    });

    navigation.navigate('myDrops');
 }

  
  return (
   <View style = {styles.layout}>
    <Image source={image} style = {styles.image} />
    <View>
      <View style= {styles.title}>
        <Text style= {styles.medText}>{medication.name}</Text>
      </View>
      
     {/* <Text>take this medication {medication.frequency} times daily</Text> */}
     <TouchableOpacity style={styles.button} onPress={addToMyDrops}>
        <Text style={styles.buttonText}>Add to myDrops</Text>
      </TouchableOpacity>
    </View>
  </View>      
  );
}


const styles = StyleSheet.create({
    layout: {
    marginHorizontal: 24,
    flexDirection: 'row',
    marginVertical: 8,
    backgroundColor: 'white'
  },
  image: {
    borderRadius: 12,
    height: 120,
    width: 100,
  },
  title: {
    alignItems: 'center'
  },
  medText: {
    fontWeight: 'bold',
    fontSize: 32,

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
