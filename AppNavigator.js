import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';

// Importarea ecranelor necesare
import HomeScreen from '../screens/HomeScreen';
import ReviewsScreen from '../screens/ReviewsScreen';
import PhotosScreen from '../screens/PhotoGalleryScreen';
import VideosScreen from '../screens/VideoGalleryScreen';
import ContactScreen from '../screens/ContactScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Ecranul principal Home */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Barber VIP',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Reviews')}
                title="Recenzii"
                color="#007AFF"
              />
            ),
          })}
        />
        
        {/* Ecranul pentru recenzii */}
        <Stack.Screen 
          name="Reviews" 
          component={ReviewsScreen} 
          options={{ title: 'Recenzii' }}
        />
        
        {/* Ecranul pentru galerie foto */}
        <Stack.Screen 
          name="Photos" 
          component={PhotosScreen} 
          options={({ navigation }) => ({
            title: 'Galerie Foto',
            headerLeft: () => (
              <Button
                onPress={() => navigation.goBack()}
                title="Înapoi"
                color="#007AFF"
              />
            ),
          })} 
        />
        
        {/* Ecranul pentru galerie video */}
        <Stack.Screen 
          name="Videos" 
          component={VideosScreen} 
          options={({ navigation }) => ({
            title: 'Galerie Video',
            headerLeft: () => (
              <Button
                onPress={() => navigation.goBack()}
                title="Înapoi"
                color="#007AFF"
              />
            ),
          })} 
        />
        
        {/* Ecranul pentru contact */}
        <Stack.Screen 
          name="Contact" 
          component={ContactScreen} 
          options={{ title: 'Contact' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
