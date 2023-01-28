import React, { useContext, useState } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typhography/text.component";

import {
  AuthContainer,
  SplashBackground,
  ErrorContainer,
} from "../components/auth.styles";
import { AuthInput } from "../components/auth.styles";
import { AuthButton } from "../components/auth.styles";
import { AuthContext } from "../../../services/auth service/auth.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthContext);

  return (
    <SplashBackground>
      <AuthContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        </Spacer>
      </AuthContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </SplashBackground>
  );
};
