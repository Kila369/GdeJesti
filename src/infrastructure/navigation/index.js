import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "../../services/auth service/auth.context";
import { AppNavigator } from "./app.navigator";
import { AuthNavigator } from "./auth.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
