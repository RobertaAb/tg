import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// IMPORTS COMPONENTS
import CustomInput from '../../components/Input/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignInScreen = () => {
  const { height, width } = useWindowDimensions();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onPressEvent = () => {
    navigation.navigate('Administrativo');
  }

  return (
    <View>
      <View>
        <Text style={[styles.title, styles.login, { height: height * 0.3 }]}>Entrar</Text>
      </View>
      <View style={styles.container}>
        <CustomInput
          placeholder="User name"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          value={password}
          setValue={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />

        <CustomButton
          onPress={onPressEvent}
          text="Sign In"
        />
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

export default SignInScreen;