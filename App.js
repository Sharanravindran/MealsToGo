import React, { useState, useEffect } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native';
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
import { Navigation } from './src/navigation';
import { FavouritesContextProvider } from './src/api/favourites/context/favourites.context'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYta9EdFNY0KSimIjrPhPuH4qSz8TSJx0",
  authDomain: "mealstogo-1d30d.firebaseapp.com",
  projectId: "mealstogo-1d30d",
  storageBucket: "mealstogo-1d30d.appspot.com",
  messagingSenderId: "947450621344",
  appId: "1:947450621344:web:3c0e1cacfdf5b8bc4288c5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword("mo@binni.io", "test123")
        .then((user) => {
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
  }, []);

  // createUserWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });

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

  if (!isAuthenticated) return null;


  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({

});


