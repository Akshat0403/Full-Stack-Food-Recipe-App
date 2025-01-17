import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { TextInput } from 'react-native';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './Screens/WelcomeScreen';
import HomeScreen from './Screens/HomeScreen';
import Recipes from './Screens/Recipes';
import Categories from './Screens/Categories';
import Loading from './Screens/Loading';
import RecipeDetails from './Screens/RecipeDetails';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName = 'Welcome' 
            screenOptions = {{
                headerShown: false
            }}
        >

            <Stack.Screen 
                name = 'Home' 
                component = {HomeScreen}
            />
            <Stack.Screen 
                name = 'Welcome' 
                component = {WelcomeScreen}
            />
            <Stack.Screen 
              name = "Category"
              component={Categories}
            />
            <Stack.Screen 
              name = 'Recipes'
              component={Recipes}
            />
            <Stack.Screen 
              name = "Loading"
              component={Loading}
            />
            <Stack.Screen
              name='Recipe Details'
              component={RecipeDetails}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
