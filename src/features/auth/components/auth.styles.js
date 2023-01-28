import styled from "styled-components";
import { ImageBackground, View } from "react-native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Text } from "../../../components/typhography/text.component";

export const SplashBackground = styled(ImageBackground).attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
`;

export const AuthContainer = styled(View)`
  background-color: rgba(255, 255, 255, 0.8);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[4]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;
export const ErrorContainer = styled(View)`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
