import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Pressable, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// IMPORTS COMPONENTS
import CustomInput from '../../components/Input/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const CadastroScreen = () => {
  const { height, width } = useWindowDimensions();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onPressEvent = () => {
    navigation.navigate('Administrativo');
  }

  return (
    <View>
      <View style={styles.container}>
        {/* <CustomInput
          placeholder="User name"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          value={password}
          setValue={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        /> */}

        <View style={{ margin: 8 }}>
        </View>

        <Pressable style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 14,
          backgroundColor: '#fff',
        }}
          onPress={() => {
            navigation.navigate('Novo procedimento')
          }}
        >
          <Ionicons name="add" size={16} color="#2a2aff" />
          <Text style={{ marginLeft: 4, color: '#2a2aff' }}>Cadastrar novo procedimento</Text>
        </Pressable>

        <View style={{ margin: 8 }}>
        </View>

        <Pressable style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 14,
          backgroundColor: '#fff',
        }}
          onPress={() => {
            navigation.navigate('Novo usuário')
          }}
        >
          <Ionicons name="add" size={16} color="#2a2aff" />
          <Text style={{ marginLeft: 4, color: '#2a2aff' }}>Cadastrar novo usuário</Text>
        </Pressable>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  login: {
    alignItems: 'flex-start',
    padding: 18
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#2a2aff',
    maxHeight: 100,
    paddingTop: 32
  },
  container: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CadastroScreen;