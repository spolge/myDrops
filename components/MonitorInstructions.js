import { StyleSheet, Text, View , Image, ScrollView} from 'react-native';
import image1 from '../assets/pulldownlid.png';
import image2 from '../assets/closelid.png';
import image3 from '../assets/wipeaway.png';

export default function MonitorInstructions() {
  return (
    <ScrollView style = {styles.container}>
      <View style = {styles.titleAndGrid}>
      <Text style = {styles.title}>Eye drop guide</Text>
      </View>
      <Text style={styles.instructionsTitle}>Instructions</Text>
       <Text style={styles.instructionsText}>1. Wash your hands.</Text>
       <Text style={styles.instructionsText}>2. Shake the bottle. Remove the cap.</Text>
       <Text style={styles.instructionsText}>3. Tilt your head back. Consider lying down.</Text>
       <Text style={styles.instructionsText}>4. Pull your lower eyelid down with your finger to form a pocket.</Text>
       <View style = {styles.titleAndGrid}>
      <Image source = {image1} style = {styles.image}></Image>
       </View>
       <Text style={styles.instructionsText}>5. Brace your hand that is holding the bottle on top of your other hand.</Text>
       <Text style={styles.instructionsText}>6. Look up with your eyes towards the top of your head. Aim the bottle into the pocket. Try not to let the bottle touch the eye or eyelid.</Text>
       <Text style={styles.instructionsText}>7. Squeeze the bottle, dont worry if more that one drop falls into your eye.</Text>
       <Text style={styles.instructionsText}>8. Close your eyes. apply firm pressure for one minute to the area where the eyelid meet the nose. This will help to prevent the drop from going down your nose and throat</Text>
       <View style = {styles.titleAndGrid}>
      <Image source = {image2} style = {styles.image}></Image>
       </View>
       <Text style={styles.instructionsText}>9. With your eyes closed, wipe off any exces eyedrops with a tissue.</Text>
       <Text style={styles.instructionsText}>10. If you need to take more than one kind of drop, wait five minutes before instilling the next medication.</Text>
       <View style = {styles.titleAndGrid}>
      <Image source = {image3} style = {styles.image}></Image>
       </View>
     

    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  titleAndGrid: {
    alignItems: 'center'
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    marginBottom: 12,
  },
  image: {
    height: 300,
    width: 300,
  },
instructionsTitle: {
  fontSize: 20,
  fontWeight: '500',
  marginLeft: 30,
  marginTop: 15
},
instructionsText: {
  fontSize: 18,
  marginLeft: 30,
  marginTop: 12,
  marginRight: 60,
}
});
