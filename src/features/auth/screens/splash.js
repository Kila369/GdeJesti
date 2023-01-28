import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  SplashBackground,
  AuthContainer,
  AuthButton,
  Title,
} from "../components/auth.styles";

export const SplashScreen = ({ navigation }) => {
  return (
    <SplashBackground>
      <Title>Meals to go</Title>
      <AuthContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AuthContainer>
    </SplashBackground>
  );
};
