import 'react-native-gesture-handler'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Navigation from './Navigation';

export default function App() {    
  const [fontsLoaded] = useFonts({
    'Outfit': require('./assets/fonts/Outfit-Medium.ttf'),
    'Logirent': require('./assets/fonts/Logirent-Regular.ttf'),
  });

  if (!fontsLoaded) {
    <AppLoading />
  } else {
    return (
      <Navigation />
    );
  }
}