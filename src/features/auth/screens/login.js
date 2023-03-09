import React, { useContext, useState } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typhography/text.component";
import { ActivityIndicator } from "react-native-paper";

import {
  AuthContainer,
  SplashBackground,
  ErrorContainer,
} from "../components/auth.styles";
import { AuthInput } from "../components/auth.styles";
import { AuthButton } from "../components/auth.styles";
import { Title } from "../components/auth.styles";
import { AuthContext } from "../../../services/auth service/auth.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error, setError } = useContext(AuthContext);

  return (
    <SplashBackground>
      <Title>Gde Jesti?</Title>
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
            label="Lozinka"
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
          {isLoading ? (
            <ActivityIndicator animating={true} color={"blue"} />
          ) : (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Uloguj se
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
          Nazad
        </AuthButton>
      </Spacer>
    </SplashBackground>
  );
};
