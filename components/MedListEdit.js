import { StyleSheet, Text, View, Image} from 'react-native';
import image from '../assets/temporaryBottle.webp'


export default function MedListEdit() {
  return (
   <View style = {styles.layout}>
    <Image source={image} style = {styles.image} />
    <Text>hello medList edit medications</Text>
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
});
