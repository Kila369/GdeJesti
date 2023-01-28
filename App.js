import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { initializeApp } from "firebase/app";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurant service/restaurants.context";
import { LocationContextProvider } from "./src/services/location service/location.context";
import { FavouritesContextProvider } from "./src/services/favourites service/favourites.context";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthContextProvider } from "./src/services/auth service/auth.context";

const firebaseConfig = {
  apiKey: "AIzaSyBakBSZxgMyAwE8w58dB_yLqEa06-rim5Y",
  authDomain: "hranazaponeti.firebaseapp.com",
  projectId: "hranazaponeti",
  storageBucket: "hranazaponeti.appspot.com",
  messagingSenderId: "874475488308",
  appId: "1:874475488308:web:1e823d01145b9f6830b661",
};

const app = initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
