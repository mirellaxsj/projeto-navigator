import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function TelaJuros() {
    
  const [valor, setValor] = useState('');
  const [taxaJuros, setTaxaJuros] = useState('');
  const [valorTotal, setValorTotal] = useState(null);

  const calcularJuros = () => {

    const valorCalculado = parseFloat(valor) + (parseFloat(valor) * parseFloat(taxaJuros) / 100);
    setValorTotal(valorCalculado.toFixed(2));

  };

  return (

    <View style={styles.container}>

      <Text style={styles.infoText}>Informe os dados abaixo:</Text>

      <TextInput

        style={styles.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={text => setValor(text)}

      />

      <TextInput

        style={styles.input}
        placeholder="Porcentagem de Juros"
        keyboardType="numeric"
        value={taxaJuros}
        onChangeText={text => setTaxaJuros(text)}

      />

      <TouchableOpacity style={styles.button} onPress={calcularJuros}>

        <Text style={styles.buttonText}>Calcular Juros</Text>

      </TouchableOpacity>

      {valorTotal !== null && (

        <Text style={styles.resultText}>O valor com juros é: R$ {valorTotal}</Text>

      )}

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
    infoText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    width: '20%', 
    height: 50,
    borderColor: 'pink',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'white',
  },
  button: {
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  resultText: {
    marginTop: 20,
    fontSize: 20,
    color: 'white',
  },

});