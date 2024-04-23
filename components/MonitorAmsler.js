import { StyleSheet, Text, View , Image, ScrollView} from 'react-native';
import image from '../assets/AmslerGrid.png'

export default function MonitorAmsler() {
  return (
    <ScrollView style = {styles.container}>
      <View style = {styles.titleAndGrid}>
      <Text style = {styles.title}>Amsler Grid</Text>
      <Image source = {image} style = {styles.AmslerGrid}></Image>
      </View>
      <View>
       <Text style={styles.instructionsTitle}>Instructions</Text>
       <Text style={styles.instructionsText}>1. Ensure you are in good lighting and are wearing your correct reading prescription.</Text>
       <Text style={styles.instructionsText}>2. Hold the Amsler grid at your normal reading distance, typically 30-40cm away from your eyes.</Text>
       <Text style={styles.instructionsText}>3. Cover one eye with your hand, focus your uncovered eye on the central dot or crosshair in the middle of the grid.</Text>
       <Text style={styles.instructionsText}>4. While keeping your focus on the central dot, observe the grid. You should see a pattern of horizontal and vertical lines with a central point.</Text>
       <Text style={styles.instructionsText}>5. Pay attention to any irregularities or distortions in the grid lines. These could include wavy, blurry, missing, or dark areas in the grid.</Text>
       <Text style={styles.instructionsText}>6. If you notice any changes or abnormalities in the grid pattern, make note of the location to inform your eye care proffesional.</Text>

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
  AmslerGrid: {
    height: 300,
    width: 300,
  },
instructionsTitle: {
  fontSize: 20,
  fontWeight: '500',
  marginLeft: 60,
  marginTop: 15
},
instructionsText: {
  fontSize: 18,
  marginLeft: 60,
  marginTop: 12,
  marginRight: 60,
}
});
