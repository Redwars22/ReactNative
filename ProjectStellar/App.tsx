import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableWithoutFeedbackBase } from 'react-native';
import Planet from './planets/Planet';

export default function App() {
  return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/mainLogo.png')}/>
        <Text style={styles.title}>Project Stellar</Text>
        <Text style={styles.description}>Conheça os planetas do sistema solar!</Text>
        <StatusBar style="light" />  
        <ScrollView style={styles.scroll}>
          <Planet
            name="Mercúrio"
            distanceToEarth="0,6 UA"
            distanceToSun="0,4 UA"
            orbitalPeriod="88 dias"
            classification="rochoso"
            moons="não tem"
            radius="4.879 km"
            mass="3,2.10^23kg"
          />
          <Planet
            name="Vênus"
            distanceToEarth="0,28 UA"
            distanceToSun="0,72 UA" 
            orbitalPeriod="224,7 dias"
            classification="rochoso"
            moons="não tem"
            radius="12.104 km"
            mass="4,8.10^24kg"
          />
          <Planet
            name="Terra"
            distanceToEarth="-"
            distanceToSun="1 UA"
            orbitalPeriod="365,2 dias"
            classification="rochoso"
            moons="1"
            radius="12.752 km"
            mass="5,9.10^24kg"
          />
          <Planet
            name="Marte"
            distanceToEarth="0,5 UA"
            distanceToSun="1,6 UA"
            orbitalPeriod="1,8 anos"
            classification="rochoso"
            moons="2"
            radius="6.729 km"
            mass="6,4.10^23kg"
          />
          <Planet
            name="Júpiter"
            distanceToEarth="4,2 UA"
            distanceToSun="5,45 UA"
            orbitalPeriod="11,8 anos"
            classification="gasoso"
            moons="79"
            radius="142.984 km"
            mass="317,8 terras"
          />
          <Planet
            name="Saturno"
            distanceToEarth="8,5 UA"
            distanceToSun="10 UA"
            orbitalPeriod="29,4 anos"
            classification="gasoso"
            moons="82"
            radius="120.536 km"
            mass="95 terras"
          />
          <Planet
            name="Urano"
            distanceToEarth="18,2 UA"
            distanceToSun="20 UA"
            orbitalPeriod="84,3 anos"
            classification="gasoso"
            moons="27"
            radius="51.118 km"
            mass="14,5 terras"
          />
          <Planet
            name="Netuno"
            distanceToEarth="29 UA"
            distanceToSun="30 UA"
            orbitalPeriod="164,8 anos"
            classification="gasoso"
            moons="14"
            radius="49.528 km"
            mass="17 terras"
          />
        </ScrollView>
        <View style={styles.bottom}>
          <Text style={styles.aboutText}>Feito por André Pereira usando ReactNative</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#010e33',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 100,
    height: 100,
    marginTop: 70,
  },

  title: {
    color: '#437de7',
    fontSize: 30,
    textShadowOffset: {width: -1, height: 1},
    textShadowColor: '#ffffff',
    textShadowRadius: 3
  },

  description: {
    color: '#fff',
    fontSize: 17
  },

  scroll: {
    marginTop: 20,
  },

  aboutText: {
    color: '#fff',
    fontSize: 15,
    margin: 10
  },

  bottom: {
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#4663e6'
  }
});
