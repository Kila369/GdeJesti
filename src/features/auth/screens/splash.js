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
      <Title>Gde jesti?</Title>
      <AuthContainer>
        <AuthButton
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Prijavi se
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Registruj se
          </AuthButton>
        </Spacer>
      </AuthContainer>
    </SplashBackground>
  );
};
