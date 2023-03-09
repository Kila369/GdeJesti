import React from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "react-native-paper";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";

export const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params;
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" color={colors.ui.error} />
        <Spacer>
          <Text variant="error">Greška, {error}!</Text>
        </Spacer>
      </CartIconContainer>
    </SafeArea>
  );
};
