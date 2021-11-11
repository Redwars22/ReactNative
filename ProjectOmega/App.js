import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  const developer = "André Pereira (@Redwars22)";

  return (
    <>
      <View style={styles.container}>
        <Image source={require('./assets/rocket.png')} width={50}></Image>
        <Text style={{ fontSize: 40, color: '#ff456d'}}>Bem-vindo</Text>
        <Text style={styles.textV}>Nome de usuário: </Text>
        <TextInput style={styles.dataInput}></TextInput>
        <Text style={styles.textV}>Senha: </Text>
        <TextInput style={styles.dataInput}></TextInput>
        <Text style={styles.footerNote}>Criado por {developer}</Text>
        <Text style={styles.madeWith}>Feito usando</Text>
        <Image source={require('./assets/react.png')} width={50} height={50}></Image>
        <StatusBar style="dark-content" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363c47',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textV: {
    margin: 20,
    color: '#3d7eff'
  },

  madeWith: {
    margin: 20,
    color: '#3d7eff',
    fontSize: 20
  },

  footerNote: {
    marginTop: 110,
    color: '#3d7eff'
  },

  dataInput: {
    height: 35,
    width: 250,
    padding: 10,
    backgroundColor: '#243454',
    color: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2d63cf',
  },
});
