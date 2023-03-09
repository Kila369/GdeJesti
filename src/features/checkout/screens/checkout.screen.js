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
  PaymentProcessing,
} from "../components/checkout.styles";
import { CreditCardInput } from "../components/credit-card.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { payRequest } from "../../../services/checkout/checkout.service";

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const cartList = cart.map(({ item, price }) => {
    return <List.Item title={`${item} - ${price}rsd`} />;
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

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      navigation.navigate("CheckoutError", {
        error: "Molim vas unesite validnu kreditnu karticu!",
      });
      return;
    }
    payRequest(card.id, sum, name)
      .then((result) => {
        console.log(result);
        setIsLoading(false);
        navigation.navigate("CheckoutSuccess");
        clearCart();
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        navigation.navigate("CheckoutError", { error: err });
      });
  };

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      {isLoading && <PaymentProcessing />}
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Vaša narudžbina</Text>
            <List.Section>{cartList}</List.Section>
            <Text>Ukupno: {sum}rsd</Text>
          </Spacer>
        </Spacer>
        <NameInput
          label="Ime"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Spacer size="large">
          {name.length > 0 && (
            <CreditCardInput
              name={name}
              onSuccess={setCard}
              onError={() =>
                navigation.navigate("CheckoutError", {
                  error: "Došlo je do greške prilikom obrade Vaše kartice",
                })
              }
            />
          )}
        </Spacer>
        <PayButton
          icon="cash"
          mode="contained"
          onPress={onPay}
          disabled={isLoading}
        >
          Plati
        </PayButton>
        <ClearButton
          icon="cart-off"
          mode="contained"
          onPress={clearCart}
          disabled={isLoading}
        >
          Očisti korpu
        </ClearButton>
      </ScrollView>
    </SafeArea>
  );
};
