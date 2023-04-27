import React, { useRef, useState } from 'react';
import { Alert, Keyboard, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './src/components/styles';
import api from './src/services/api';


function App() {

  const [cep, setCep] = useState("");
  const inputRef = useRef(null);
  const [cepUSer, setCepUser] = useState(null);

  async function buscarCep() {
    if (cep == '') {
      alert('Digite um CEP Valido');
      setCep("");
      return;
    }
    try {
      //buscando na api
      const response = await api.get(`/${cep}/json`);
      // console.log(response.data);
      setCepUser(response.data);
      Keyboard.dismiss();

    } catch (error) {
      alert(error + 'CEP não encontrado');
    }
  }

  function limpar() {
    setCep("");
    inputRef.current.focus();
    setCepUser(null);
  }

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
          ref={inputRef}
        />
      </View>
      <View style={styles.areaBtn}>

        <TouchableOpacity style={[styles.botao, { backgroundColor: '#3CB371', }]}
          onPress={buscarCep}
        >
          <Text style={styles.btnText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, { backgroundColor: '#FF6347', }]}
          onPress={limpar}>
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {/*RENDERIZAÇÃO CONDICIONAL*/}
      {cepUSer &&
        <View style={styles.resultado}>
          <Text style={styles.itemText}>Cep: {cepUSer.cep}</Text>
          <Text style={styles.itemText}>Logradouro: {cepUSer.logradouro}</Text>
          <Text style={styles.itemText}>Bairro: {cepUSer.bairro}</Text>
          <Text style={styles.itemText}>Cidade: {cepUSer.localidade}</Text>
          <Text style={styles.itemText}>Estado: {cepUSer.uf}</Text>
        </View>
      }


    </SafeAreaView>

  );
}

export default App;
