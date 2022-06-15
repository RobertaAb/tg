import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from '@react-navigation/native';

// IMPORTS COMPONENTS
import CustomInput from '../../../components/Input/CustomInput';
import CustomButton from '../../../components/CustomButton/CustomButton';
import CustomTextInputMulti from '../../../components/CustomTextInputMulti/CustomTextInputMulti';


const ProcedureRegistrationScreen = () => {
  const [titulo, setTitulo] = useState('');
  const [description, setDescription] = useState('');
  const [solution, setSolution] = useState('');

  const navigation = useNavigation();

  const onPressEvent = () => {
    navigation.navigate('Administrativo')
  }

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <Text style={styles.title}>Categorias</Text>

        <View style={[styles.select, styles.inputIOS, styles.inputAndroid]}>
          <RNPickerSelect
            placeholder={{ label: "Selecione uma categoria...", value: null }}
            onValueChange={(value) => console.log(value)}
            items={[
              { id: 0, label: "Hardware", value: "HW" },
              { id: 1, label: "Software", value: "SW" },
              { id: 2, label: "Externo", value: "EXT" },
              { id: 3, label: "Interno", value: "INT" },
              { id: 4, label: "Configuração", value: "CFG" },
            ]}
          />
        </View>

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

        <CustomButton
          onPress={onPressEvent}
          text="Salvar"
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

export default ProcedureRegistrationScreen;