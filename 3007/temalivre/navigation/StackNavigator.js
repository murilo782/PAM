import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Cardapio from '../screens/Cardapio';
import Detalhes from '../screens/Detalhes';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#181818',
          },

          headerTintColor: '#FFFFFF',

          headerTitleStyle: {
            fontWeight: 'bold',
          },

          contentStyle: {
            backgroundColor: '#F5F5F5',
          },
        }}
      >

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'FoodSpot',
          }}
        />

        <Stack.Screen
          name="Cardapio"
          component={Cardapio}
          options={{
            title: 'Cardápio',
          }}
        />

        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{
            title: 'Detalhes do Lanche',
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}