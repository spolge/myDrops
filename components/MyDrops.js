import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import UsersMedications from './UsersMedications';

export default function MyDrops() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Users EyeDrops</Text>
      <ScrollView style={styles.mymedlist}>
        <UsersMedications />
        <UsersMedications />
        <UsersMedications />
        <UsersMedications />
        <UsersMedications />
        <UsersMedications />
        <UsersMedications />
        <UsersMedications />
        <UsersMedications />
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