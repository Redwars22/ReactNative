import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';
import * as Linking from 'expo-linking';
import Ionicons from '@expo/vector-icons/Ionicons';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [color, setColor] = useState('#fff');
  const [page, setPage] = useState('index');

  return page == 'index' ? (
    <View style={styles.container}>
      <Ionicons name="color-palette" size={120} color="red" />
      <Text style={styles.paragraph}>
        Digite o código HEX de uma cor e veja-a abaixo
      </Text>
      <TextInput
        style={styles.input}
        value={color}
        onChangeText={(value) => {
          setColor(value);
        }}
      />
      <View
        style={{
          backgroundColor: color,
          width: 150,
          height: 150,
          borderRadius: 10,
          marginBottom: 110,
        }}></View>
      <Button
        onPress={() => setPage('about')}
        title="SOBRE ESTE APP"
        color="red"></Button>
    </View>
  ) : (
    <View style={styles.container}>
      <Ionicons name="info" size={120} color="red" />
      <Text style={{ fontSize: 25 }}>SOBRE O APP</Text>
      <Text style={{ margin: 25 }}>Codinome: Project Chromakey</Text>
      <Text style={{ marginBottom: 120 }}>
        Desenvolvido em ReactNative por André Pereira(@Redwars22)
      </Text>
      <View>
        <View style={{marginBottom: 25}}>
          <Button
            onPress={() => setPage('index')}
            title="VOLTAR"
            color="red"
            style={{ margin: 25 }}></Button>
        </View>
        <View>
          <Button
            onPress={() => Linking.openURL('https://github.com/Redwars22')}
            title="MAIS PROJETOS MEUS"
            color="red"></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderColor: 'red',
    borderRadius: 5,
    borderWidth: 2,
    color: 'red',
    maxWidth: 150,
    width: 150,
    textAlign: 'center',
    padding: 15,
    fontSize: 25,
    margin: 15,
  },
});
