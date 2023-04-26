import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './src/components/styles';
import api from './src/services/api';


function App() {

  const [cep, setCep] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.texto}>Informe o CEP</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex:7580000'
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType='numeric'
        />
      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao,{ backgroundColor:'#3CB371',}]}>
          <Text style={styles.btnText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao,{ backgroundColor:'#FF6347',}]}>
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>

  );
}

export default App;
