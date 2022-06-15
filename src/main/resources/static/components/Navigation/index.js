import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// SCREENS

import SignInScreen from '../../screens/SignIn/SignInScreen';
import UserRegistrationScreen from '../../screens/Registration/User/UserRegistrationScreen';
import ProcedureRegistrationScreen from '../../screens/Registration/Procedure/ProcedureRegistrationScreen';
import HomeScreen from '../../screens/Home/HomeScreen';
import ProcedureUpdate from '../../screens/UpdatesData/ProcedureUpdate';
import ProcedureDetails from '../../screens/Detail/ProcedureDetails';
import HomeAdminScreen from '../../screens/HomeAdmin/HomeAdminScreen';
import CadastroScreen from '../../screens/Registration/Cadastro';

const { Navigator, Screen } = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2a2aff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '500',
          },
        }}
      >
        <Screen name='Bem vindo' component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Signin')}
                color="#fff"
              >
                <Ionicons name="person-circle-outline" size={24} color="#fff" />
              </Pressable>
            ),
          })}
        />

        <Screen name="Administrativo" component={HomeAdminScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <View style={{
                flexDirection: 'row'
              }}>
                <Pressable
                  onPress={() => {
                    navigation.navigate('Cadastro')
                  }}
                >
                  <Ionicons style={{ marginRight: 16 }} name="add" size={24} color="#fff" />
                </Pressable>

                <Pressable
                  onPress={() => {
                    navigation.navigate('Bem vindo')
                  }}
                  color="#fff"
                >
                  <Ionicons name="log-out-outline" size={24} color="#fff" />
                </Pressable>
              </View>
            ),
          })}
        />

        <Screen name='Cadastro' component={CadastroScreen} />

        <Screen name='Novo procedimento' component={ProcedureRegistrationScreen} />

        <Screen name='Novo usuário' component={UserRegistrationScreen} />

        <Screen name='Atualização' component={ProcedureUpdate}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Signin')}
                color="#fff"
              >
                <Ionicons name="person-circle-outline" size={24} color="#fff" />
              </Pressable>
            ),
          })}
        />

        <Screen name="Detalhes" component={ProcedureDetails} />

        <Screen options={{ headerShown: false }} name="Signin" component={SignInScreen} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Navigation;