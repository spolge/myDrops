import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import image from '../assets/singledrop.webp'
import {useNavigation } from "@react-navigation/native";

export default function UsersMedications({med}) {
  const navigation = useNavigation();


  const handleEditScreen = () => {
    navigation.navigate('myDropsEdit', {med})
  };

  return (
    <TouchableOpacity  onPress={handleEditScreen}>
   <View style = {styles.layout}>
    <Image source={image} style = {styles.image} />
    <View style = {styles.content}>
      <Text style = {styles.title}>{med.name}</Text>
      <Text style = {styles.description}>Which Eye</Text>
      <Text style = {styles.description}>take this medication {med.frequency}x daily</Text>
      <Text style = {styles.description}>reminders</Text>
    </View>
  </View>      
    </TouchableOpacity>
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
    fontWeight: '600',
    fontSize: 18

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
