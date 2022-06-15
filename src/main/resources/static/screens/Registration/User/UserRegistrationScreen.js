import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// IMPORTS COMPONENTS

import CustomInput from '../../../components/Input/CustomInput';
import CustomButton from '../../../components/CustomButton/CustomButton';


// INICIALIZAÇÃO DA TELA

const UserRegistrationScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [passowrd, setPassowrd] = useState('');

  const navigation = useNavigation();

  const onPressEvent = () => {
    navigation.navigate('Administrativo')
  }

  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.title}>Nome completo</Text>
        <CustomInput
          value={username}
          setValue={setUsername}
        />
        <Text style={styles.title}>E-mail</Text>
        <CustomInput
          value={email}
          setValue={setEmail}
        />
        <Text style={styles.title}>Senha</Text>
        <CustomInput
          value={passowrd}
          setValue={setPassowrd}
        />
        <CustomButton
          onPress={onPressEvent}
          text="Salvar"
        />
      </View>
    </ScrollView >
  )
};


// ESTILOS

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
  }
});

export default UserRegistrationScreen;