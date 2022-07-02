import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import RandomNumberComponent from './components/Random';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Card style={styles.centeredCard}>
        <RandomNumberComponent/>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#03825c',
    padding: 8,
  },
  centeredCard: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    margin: 20,
    backgroundColor: '#c7ebe0'
  },
});
