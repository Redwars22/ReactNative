import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

export default function Section(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#00A8F0',
    width: '100%',
    textAlign: 'left',
    margin: 10,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#00A8F0'
  },
});
