import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { StyleSheet, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/layout/theme'
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
  // Lato_700Bold,
} from '@expo-google-fonts/lato';
import { RestaurantsContextProvider } from "./src/api/restaurants/context/restaurants.context";
import { LocationContextProvider } from './src/api/location/context/location.context'
import { Navigation } from './src/routes';

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
    // Lato_700Bold
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({

});


