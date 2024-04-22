import { StyleSheet, Text, View, Image} from 'react-native';
import image from '../assets/temporaryBottle.webp'


export default function MyDropsEdit({route: {params: {med}}}) {
  return (
   <View style = {styles.layout}>
    <Image source={image} style = {styles.image} />
    <View style = {styles.container}>
    <Text style ={styles.text}>{med.name}</Text>
    <Text style ={styles.text}>take this drop {med.frequency} times daily</Text>
    <Text style ={styles.text}>Which Eye</Text>
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
  }
});
