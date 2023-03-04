import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { Text } from "../../../components/typhography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { CartContext } from "../../../services/cart/cart.context";
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
} from "../components/checkout.styles";
import { CreditCardInput } from "../components/credit-card.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");

  const cartList = cart.map(({ item, price }) => {
    return <List.Item title={`${item} - ${price / 100}`} />;
  });

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Vaša korpa je prazna!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Vaša narudžbina</Text>
            <List.Section>{cartList}</List.Section>
            <Text>Ukupno: {sum / 100}</Text>
          </Spacer>
        </Spacer>
        <NameInput
          label="Ime"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Spacer size="large">
          {name.length > 0 && <CreditCardInput name={name} />}
        </Spacer>
        <PayButton icon="cash" mode="contained">
          Plati
        </PayButton>
        <ClearButton icon="cart-off" mode="contained" onPress={() => clearCart}>
          Očisti korpu
        </ClearButton>
      </ScrollView>
    </SafeArea>
  );
};
