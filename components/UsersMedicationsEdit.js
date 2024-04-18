import { StyleSheet, Text, View, Image} from 'react-native';


export default function UsersMedications() {
  return (
   <View style = {styles.layout}>
    <Text>hello</Text>
  </View>      
  );
}


const styles = StyleSheet.create({
    layout: {
    marginHorizontal: 24,
    flexDirection: 'row',
    marginVertical: 8,
  },
  image: {
    borderRadius: 12,
    height: 100,
    width: 100,
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
