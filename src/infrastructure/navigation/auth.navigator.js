import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen } from "../../features/auth/screens/splash";
import { LoginScreen } from "../../features/auth/screens/login";
import { RegisterScreen } from "../../features/auth/screens/register";

const Stack = createStackNavigator();

export const AuthNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
