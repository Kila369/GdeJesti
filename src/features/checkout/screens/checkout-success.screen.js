import React from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "react-native-paper";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";

export const CheckoutSuccessScreen = () => {
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="check-bold" />
        <Text variant="label">Uspešno ste naručili hranu!</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
