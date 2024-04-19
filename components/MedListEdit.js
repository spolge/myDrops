import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import image from '../assets/temporaryBottle.webp'


export default function MedListEdit({route: {params: {medication}}}) {
  
  return (
   <View style = {styles.layout}>
    <Image source={image} style = {styles.image} />
    <View>
      <View style= {styles.title}>
        <Text>{medication.name}</Text>
      </View>
     <Text>take this medication {medication.frequency} times daily</Text>
     <TouchableOpacity style={styles.button} onPress={() => {}}>
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
    height: 100,
    width: 100,
  },
  title: {
    alignItems: 'center'
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
