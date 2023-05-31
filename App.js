import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const App = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1');
      const data = await response.json();
      const pokemon = data.results[0];
      setName(pokemon.name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title={name}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 325,
    height: 30,
  },
  buttonText: {
    textTransform: 'uppercase',
    fontSize: 14,
  }
});

export default App;
