import React, { useContext, useState } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typhography/text.component";
import { ActivityIndicator } from "react-native-paper";

import {
  AuthContainer,
  SplashBackground,
  ErrorContainer,
  Title,
} from "../components/auth.styles";
import { AuthInput } from "../components/auth.styles";
import { AuthButton } from "../components/auth.styles";
import { AuthContext } from "../../../services/auth service/auth.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error, setError } = useContext(AuthContext);

  return (
    <SplashBackground>
      <Title>Meals to go</Title>
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
        <Spacer size="large">
          <AuthInput
            label="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(text) => setRepeatedPassword(text)}
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {isLoading ? (
            <ActivityIndicator animating={true} color={"blue"} />
          ) : (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          )}
        </Spacer>
      </AuthContainer>
      <Spacer size="large">
        <AuthButton
          mode="contained"
          onPress={() => {
            setError(null);
            navigation.goBack();
          }}
        >
          Back
        </AuthButton>
      </Spacer>
    </SplashBackground>
  );
};
