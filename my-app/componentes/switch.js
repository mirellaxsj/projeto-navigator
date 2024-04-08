import React, { useState } from 'react';
import { StatusBar, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isDay, setIsDay] = useState(true);

  const toggleDayNight = () => {
    setIsDay(!isDay);
  };

  const getGreeting = () => {
    return isDay ? '' : '';
  };

  const getBackgroundColor = () => {
    return isDay ? '#1b98e0' : 'black';
  };

  const handleButtonClick = () => {
    toggleDayNight(); 
  };

  return (

    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>

      <TouchableOpacity onPress={toggleDayNight} style={styles.toggleButton}>

      {/* //botao para trocar imagem sol para lua */}
        <Image 
          source={isDay ? require('../assets/sol.png') : require('../assets/lua.png')}
          style={styles.icon}
        />

      </TouchableOpacity>

      {/* //botao para modificar de sol para lua */}
      <TouchableOpacity onPress={handleButtonClick} style={styles.toggleButton}>
        <Text style={styles.buttonText}>Click</Text> 
      </TouchableOpacity>

      {/* //botao para modificar texto */}
      <TouchableOpacity onPress={toggleDayNight} style={styles.toggleButton}>
        <Text style={styles.greeting}>{getGreeting()}</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  toggleButton: {
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    top: 150,
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'black',
  },
  

  icon: {
    width: 200,
    height: 200,
  },

  greeting: {
    fontSize: 54,
    fontWeight: 'bold',
  },

});