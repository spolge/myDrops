import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {useNavigation } from "@react-navigation/native";

export default function Settings() {
  const navigation = useNavigation()

  const handleSignOutPress = () => {
    navigation.navigate('SignIn')
  };
  return (
    <View style = {styles.container}>
      <Text style= {styles.text}>Settings</Text>
      <Text style= {styles.text}>User</Text>
      <Text style= {styles.text}>Current UserName</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOutPress}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    marginBottom: 20,
  },
   button: {
    backgroundColor: '#00B4D8',
    padding: 10,
    borderRadius: 5,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
