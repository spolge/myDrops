import { StyleSheet, Text, View, Image} from 'react-native';
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
  }
});
