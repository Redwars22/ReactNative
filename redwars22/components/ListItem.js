import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListItem(props){
  return(
    <View>
      <Text style={{fontSize: 17, padding: 3, color: 'white', marginLeft: 8}}>
        ◉ <Text style={{fontWeight: 'bold'}}>{props.title} :</Text> {props.text}
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
})