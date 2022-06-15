import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// IMPORTS COMPONENTS
import CustomInput from '../../components/Input/CustomInput';
import CustomTextInputMulti from '../../components/CustomTextInputMulti/CustomTextInputMulti';


const ProcedureDetails = () => {
  const [titulo, setTitulo] = useState('');
  const [description, setDescription] = useState('');
  const [solution, setSolution] = useState('');

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.title}>Título</Text>
        <CustomInput
          value={titulo}
          setValue={setTitulo}
        />
        <Text style={styles.title}>Descrição</Text>
        <CustomTextInputMulti
          value={description}
          setValue={setDescription}
        />
        <Text style={styles.title}>Solução</Text>
        <CustomTextInputMulti
          value={solution}
          setValue={setSolution}
        />
      </View>
    </ScrollView >
  )
};

const styles = StyleSheet.create({
  login: {
    alignItems: 'flex-start',
    padding: 18
  },
  title: {
    fontWeight: '500',
    color: '#2a2aff',
    paddingTop: 10,
    fontSize: 16,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 24
  },
  select: {
    backgroundColor: '#fff',
    height: 48,
    marginVertical: 8,
    color: 'gray',
  },
  inputIOS: {
    fontSize: 14,
    paddingHorizontal: 7,
    paddingVertical: 0,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 2,
    color: 'gray',
    paddingRight: 3,
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 7,
    paddingVertical: 0,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 2,
    color: 'gray',
    paddingRight: 3,
  },
});

export default ProcedureDetails;