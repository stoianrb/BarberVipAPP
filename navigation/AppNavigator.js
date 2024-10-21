import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AppointmentsScreen from './screens/AppointmentsScreen';
import ContactScreen from './screens/ContactScreen';
import LocationScreen from './screens/LocationScreen';
import PhotoGalleryScreen from './screens/PhotoGalleryScreen';
import VideoGalleryScreen from './screens/VideoGalleryScreen';
import ReviewsScreen from './screens/ReviewsScreen'; // Importă ReviewsScreen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Appointments" component={AppointmentsScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="PhotoGallery" component={PhotoGalleryScreen} />
        <Stack.Screen name="VideoGallery" component={VideoGalleryScreen} />
        <Stack.Screen name="Reviews" component={ReviewsScreen} /> {/* Adaugă ReviewsScreen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
