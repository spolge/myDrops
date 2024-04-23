import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import image from '../assets/singledrop.webp'
import {useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function UsersMedications({med}) {
  const navigation = useNavigation();


  const handleEditScreen = () => {
    navigation.navigate('myDropsEdit', {med})
  };

  return (
    <View style = {styles.layout}>
    <Image source={image} style = {styles.image} />
    <View style = {styles.content}>
      <View style = {styles.titleAndEdit}>
      <Text style = {styles.title}>{med.name}</Text>
     <TouchableOpacity  onPress={handleEditScreen}>
      <Feather name="edit" size={20} color="black" />
    </TouchableOpacity>

      </View>
      <Text style = {styles.description}>Which Eye</Text>
      <Text style = {styles.description}>take this medication {med.frequency}x daily</Text>
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
    flex: 1
  },
  title: {
    fontWeight: '600',
    fontSize: 18

  },
  content: {
    flex: 2,
    padding: 12,
  },
  titleAndEdit: {
    flexDirection: 'row',
    justifyContent: 'space-between',


  },
  
  description: {
    fontSize: 12,
    marginTop: 4,
    color: '#280d5F'
  },
});
