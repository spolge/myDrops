import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import image from '../assets/temporaryBottle.webp';
import {useNavigation, useRoute } from "@react-navigation/native";

export default function AllMedications({medication}) {
  const navigation = useNavigation();

  const handleEditScreen = () => {
    navigation.navigate('MedListEdit',{medication})
  };
  
  return (
    <TouchableOpacity  onPress={handleEditScreen}>
   <View style = {styles.layout}>
    <Image source={image} style = {styles.image} />
    <View style = {styles.content}>
      <Text style = {styles.description}>{medication.name}</Text>
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