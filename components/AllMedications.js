import { StyleSheet, Text, View, Image} from 'react-native';
import image from '../assets/temporaryBottleLid.webp'

export default function AllMedications() {
  return (
   <View style = {styles.layout}>
    <Image source={image} style = {styles.image} />
    <View style = {styles.content}>
      <Text style = {styles.description}>Latanoprost</Text>
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
    justifyContent: 'center',
  },
  
  description: {
    fontSize: 28,
    fontWeight: '700', 
    marginTop: 4,
    color: '#280d5F'
  },
});