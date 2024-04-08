import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function OpcaoCal({ navigation }) {

  const goToAgeScreen = () => {

    navigation.navigate('AgeScreen');

  };

  const goToInterestScreen = () => {

    navigation.navigate('InterestScreen');

  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Escolha uma das opções abaixo:</Text>

      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button} onPress={goToAgeScreen}>

          <Text style={styles.buttonText}>Switch</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToInterestScreen}>

          <Text style={styles.buttonText}>Juros</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#111',
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
  
});