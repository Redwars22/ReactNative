import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function LangIconsComponent(){
  return(
    <View style={styles.horizontalLayout}>
      <Image source={require('../assets/angular.png')} style={styles.toolsIcons}/>
      <Image source={require('../assets/typescript.png')} style={styles.toolsIcons}/>
      <Image source={require('../assets/vuejs.png')} style={styles.toolsIcons}/>
      <Image source={require('../assets/cpp.png')} style={styles.toolsIcons}/>
      <Image source={require('../assets/react.png')} style={styles.toolsIcons}/>
      <Image source={require('../assets/angular.png')} style={styles.toolsIcons}/>
    </View>
  )
}

const styles = StyleSheet.create({
  horizontalLayout:{
    flexDirection: 'row'
  },

  toolsIcons:{
    width: 40,
    height: 40,
    margin: 5,
    marginTop: 10,
    marginBottom: 10
  }
});