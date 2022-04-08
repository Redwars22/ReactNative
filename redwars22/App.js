import * as React from 'react';
import { Text, View, StyleSheet, ScrollView , StatusBar} from 'react-native';
import Constants from 'expo-constants';

import AssetExample from './components/AssetExample';
import Header from './components/Header';
import Section from './components/Section';
import ListItem from './components/ListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="light-content"/>
        <Header name="André Pereira" username="Redwars22" />
        <View>
          <Section title="Sobre mim" />
          <Text style={styles.paragraph}>
            Considero-me extremamente criativo e curioso,
            estou sempre em busca do conhecimento, de saber
            como funcionam todas as coisas, de conhecer o
            processo. Gosto de criar coisas novas usando
            as ferramentas que domino.
          </Text>
        </View>

        <View>
          <Section title="Tecnologias" />
        </View>

        <View>
          <Section title="Links úteis" />
          <ListItem title="GitHub" text="https://github.com/Redwars22" />
          <ListItem title="LinkedIn" text="Texto 2" />
          <ListItem title="Replit" text="Texto 3" />
          <ListItem title="Stackblitz" text="https://stackblitz.com/@Redwars22" />
        </View>

        <View>
          <Section title="Sobre o app" />
          <Text style={styles.paragraph}>
            Feito usando ReactNative e Expo. Orgulhosamente desenvolvido por
            André Pereira(@Redwars22).
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#010D1E',
    padding: 12,
    paddingRight: Constants.sta
  },

  paragraph: {
    fontSize: 15, 
    color: 'white', 
    marginLeft: 8
  }
});
