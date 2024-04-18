import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import UsersMedications from './UsersMedications';
import {useNavigation } from "@react-navigation/native";

export default function MyDrops() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Users EyeDrops</Text>
      <ScrollView style={styles.mymedlist}>
        <TouchableOpacity  onPress={() => {}}>
        <UsersMedications />
      </TouchableOpacity>
       <TouchableOpacity  onPress={() => {}}>
        <UsersMedications />
      </TouchableOpacity>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginTop: 48,
  },
  mymedlist: {
    width: '100%',
    height: '100%',
  },
});