import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';

export default function RandomNumberGeneratorComponent() {
  const [number, setNumber] = useState(0);
  const [max, setMax] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.primaryText}>GERADOR DE NÚMEROS ALEATÓRIOS</Text>
      <Text style={styles.biggerText}>{number}</Text>
      <Text>Insira o valor máximo:</Text>
      <TextInput
        style={styles.maxInput}
        onChangeText={(num) => setMax(parseInt(num))}
      />
      <Button
        title="OBTER NÚMERO ALEATÓRIO"
        color={'#02292b'}
        onPress={() => {
          if (max != 0 && !isNaN(max))
            setNumber(Math.floor(Math.random() * (max + 1)));
          else Alert.alert('Por favor insira um número válido!');
        }}
      />
      <Text>Criado por André Pereira (@Redwars22)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    color: '#03825c',
  },

  primaryText: {
    fontSize: 20,
    color: '#21634f',
  },

  biggerText: {
    fontSize: '80px',
    color: '#022b1f',
  },

  maxInput: {
    borderColor: '#03825c',
    color: '#03825c',
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 18,
    width: 70,
    borderRadius: 20,
  },
});
