import React from "react";
import AnimatedLottieView from "lottie-react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  SplashBackground,
  AuthContainer,
  AuthButton,
  Title,
  AnimationContainer,
  AuthCover,
} from "../components/auth.styles";

export const SplashScreen = ({ navigation }) => {
  return (
    <SplashBackground>
      <AuthCover />
      <AnimationContainer>
        <AnimatedLottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationContainer>
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
