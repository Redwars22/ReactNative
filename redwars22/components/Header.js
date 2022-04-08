import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/profile.jpeg')}
        style={styles.profileImage}
      />
      <View style={styles.verticalContainer}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.username}>@{props.username}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#94949471',
  },

  verticalContainer: {
    marginLeft: 25,
    gap: 33,
  },

  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white'
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  username: {
    color: 'white'
  }
});
