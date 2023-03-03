import React, { useContext } from "react";

import { Text } from "../../../components/typhography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { CartContext } from "../../../services/cart/cart.context";
import { CreditCardInput } from "../components/credit-card.component";

export const CheckoutScreen = () => {
  const { cart, restaurant } = useContext(CartContext);

  return (
    <SafeArea>
      <Text>{JSON.stringify(cart)}</Text>
      <Text>{JSON.stringify(restaurant)}</Text>

      <CreditCardInput />
    </SafeArea>
  );
};
