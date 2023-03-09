import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurantsNavigator } from "./restaurant.navigator";
import { Ionicons } from "@expo/vector-icons";
import { MapScreen } from "../../features/map/screens/map.screen";

import { RestaurantsContextProvider } from "../../services/restaurant service/restaurants.context";
import { LocationContextProvider } from "../../services/location service/location.context";
import { FavouritesContextProvider } from "../../services/favourites service/favourites.context";
import { CartContextProvider } from "../../services/cart/cart.context";
import { SettingsNavigator } from "./settings.navigator";
import { CheckoutNavigator } from "./checkout.navigator";
import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restorani: "md-restaurant",
  Podešavanja: "md-settings",
  Mapa: "md-map",
  Korpa: "md-cart",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <CartContextProvider>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: colors.brand.primary,
              inactiveTintColor: colors.brand.muted,
            }}
            headerMode="none"
          >
            <Tab.Screen name="Restorani" component={RestaurantsNavigator} />
            <Tab.Screen name="Mapa" component={MapScreen} />
            <Tab.Screen name="Korpa" component={CheckoutNavigator} />
            <Tab.Screen name="Podešavanja" component={SettingsNavigator} />
          </Tab.Navigator>
        </CartContextProvider>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
