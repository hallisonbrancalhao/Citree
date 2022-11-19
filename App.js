import { View, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home/Home';
import Login from './screens/Login/Login';
import Map from './screens/Map/Map';
import Formulario from './screens/Formulario/Formulario';
import Solicitacoes from './screens/Solicitacoes/Solicitacoes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="Solicitacoes"
          options={{ headerShown: false }}
          component={Solicitacoes}
        />
        <Stack.Screen
          name="Formulario"
          options={{ headerShown: false }}
          component={Formulario}
        />
        <Stack.Screen
          name="Map"
          options={{ headerShown: false }}
          component={Map}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;