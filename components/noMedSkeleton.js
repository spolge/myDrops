import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

export default function noMedSkeleton() {
  const navigation = useNavigation();

  function goToMedList(){
    navigation.navigate('Medication List')

  }



  return (
    <View style = {styles.layout}>
      <Text style = {styles.content}>No drops added yet</Text>
      <Text style = {styles.content}>Click to go to Medication list</Text>
     <TouchableOpacity onPress={goToMedList}>
      <AntDesign name="pluscircle" size={24} color="black" />
    </TouchableOpacity>
  </View>      
  );
}


const styles = StyleSheet.create({
    layout: {
    marginHorizontal: 24,
    marginVertical: 8,
    backgroundColor: 'white',
    alignItems: 'center'
    
  },
  content: {
    marginBottom: 8
  }
});
