import * as React from 'react'
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './Screen/HomeScreen';
import DetailsScreen from './Screen/DetailsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerStyle: { // стили хедера
            backgroundColor: 'gray'
          },
          headerTintColor: '#fff', // цвет стрелки "назад"
          headerTitleStyle: { // стили заголовка
            color: 'white'
          }
        }}
      >
        <Stack.Screen
          name='Home' 
          component={HomeScreen}
          options={{ title: 'Users List' }} 
        />

        <Stack.Screen 
          name='Details' 
          component={DetailsScreen}
          options={{ title: 'User Card' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;