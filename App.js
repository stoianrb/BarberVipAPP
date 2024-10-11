import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './src/screens/HomeScreen';
import ContactScreen from './src/screens/ContactScreen';
import VideoGalleryScreen from './src/screens/VideoGalleryScreen';
import PhotoGalleryScreen from './src/screens/PhotoGalleryScreen';
import ReviewsScreen from './src/screens/ReviewsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem('navigationState');
        const state = savedStateString ? JSON.parse(savedStateString) : undefined;
        setInitialState(state);
      } catch (e) {
        console.error('Error restoring state:', e);
      }
    };

    restoreState();
  }, []);

  const onStateChange = (state) => {
    AsyncStorage.setItem('navigationState', JSON.stringify(state)).catch(e => {
      console.error('Error saving state:', e);
    });
  };

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={onStateChange}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Barber VIP' }} 
        />
        <Stack.Screen 
          name="Contact" 
          component={ContactScreen} 
          options={{ title: 'Contact' }} 
        />
        <Stack.Screen 
          name="Videos" 
          component={VideoGalleryScreen} 
          options={{ title: 'Galerie Video' }} 
        />
        <Stack.Screen 
          name="Photos" 
          component={PhotoGalleryScreen} 
          options={{ title: 'Galerie Foto' }} 
        />
        <Stack.Screen 
          name="Reviews" 
          component={ReviewsScreen} 
          options={{ title: 'Recenzii' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
