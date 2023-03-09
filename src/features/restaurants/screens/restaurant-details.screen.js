/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { List, Divider } from "react-native-paper";
import { ScrollView } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { OrderButton } from "../components/restaurant-list.styles";
import { CartContext } from "../../../services/cart/cart.context";
import { Text } from "../../../components/typhography/text.component";

export const RestaurantDetailsScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const [omlet, setOmlet] = useState(false);
  const [engleski, setEngleski] = useState(false);
  const [karadjordjeva, setKaradjordjeva] = useState(false);
  const [file, setFile] = useState(false);
  const [supa, setSupa] = useState(false);
  const [kafa, setKafa] = useState(false);
  const [kola, setKola] = useState(false);

  const { addToCart, removeFromCart } = useContext(CartContext);

  const handleOmlet = () => {
    if (omlet) {
      removeFromCart({ item: "Omlet", price: 299 }, restaurant);
      setOmlet(false);
    } else {
      addToCart({ item: "Omlet", price: 299 }, restaurant);
      setOmlet(true);
    }
  };

  const handleEngleski = () => {
    if (engleski) {
      removeFromCart({ item: "Engleski doručak", price: 450 }, restaurant);
      setEngleski(false);
    } else {
      addToCart({ item: "Engleski doručak", price: 450 }, restaurant);
      setEngleski(true);
    }
  };

  const handleKaradjordjeva = () => {
    if (karadjordjeva) {
      removeFromCart({ item: "Karađorđeva šnicla", price: 780 }, restaurant);
      setKaradjordjeva(false);
    } else {
      addToCart({ item: "Karađorđeva šnicla", price: 780 }, restaurant);
      setKaradjordjeva(true);
    }
  };

  const handleFile = () => {
    if (file) {
      removeFromCart({ item: "Pileći file", price: 600 }, restaurant);
      setFile(false);
    } else {
      addToCart({ item: "Pileći file", price: 600 }, restaurant);
      setFile(true);
    }
  };

  const handleSupa = () => {
    if (supa) {
      removeFromCart({ item: "Domaća supa", price: 250 }, restaurant);
      setSupa(false);
    } else {
      addToCart({ item: "Domaća supa", price: 250 }, restaurant);
      setSupa(true);
    }
  };

  const handleKafa = () => {
    if (kafa) {
      removeFromCart({ item: "Kafa", price: 120 }, restaurant);
      setKafa(false);
    } else {
      addToCart({ item: "Kafa", price: 120 }, restaurant);
      setKafa(true);
    }
  };

  const handleKola = () => {
    if (kola) {
      removeFromCart({ item: "Koka-Kola", price: 150 }, restaurant);
      setKola(false);
    } else {
      addToCart({ item: "Koka-Kola", price: 150 }, restaurant);
      setKola(true);
    }
  };

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <Spacer size="large" position="top" />
      <Spacer size="small" position="top" />
      <ScrollView>
        <List.Accordion
          title="Doručak"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          style={{ backgroundColor: "#F1F1F1" }}
        >
          <List.Item
            title="Omlet"
            icon="check"
            onPress={handleOmlet}
            left={(props) => (
              <List.Icon
                {...props}
                icon={omlet ? "checkbox-outline" : "checkbox-blank-outline"}
              />
            )}
            right={(props) => <Text>299rsd</Text>}
          />
          <Divider />
          <List.Item
            title="Engleski doručak"
            onPress={handleEngleski}
            left={(props) => (
              <List.Icon
                {...props}
                icon={engleski ? "checkbox-outline" : "checkbox-blank-outline"}
              />
            )}
            right={(props) => <Text>450rsd</Text>}
          />
          <Divider />
        </List.Accordion>
        <Divider />

        <List.Accordion
          title="Glavna jela"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
          style={{ backgroundColor: "#F1F1F1" }}
        >
          <List.Item
            title="Karađorđeva šnicla"
            onPress={handleKaradjordjeva}
            left={(props) => (
              <List.Icon
                {...props}
                icon={
                  karadjordjeva ? "checkbox-outline" : "checkbox-blank-outline"
                }
              />
            )}
            right={(props) => <Text>780rsd</Text>}
          />
          <Divider />

          <List.Item
            title="Pileći file"
            onPress={handleFile}
            left={(props) => (
              <List.Icon
                {...props}
                icon={file ? "checkbox-outline" : "checkbox-blank-outline"}
              />
            )}
            right={(props) => <Text>600rsd</Text>}
          />
          <Divider />

          <List.Item
            title="Domaća supa"
            onPress={handleSupa}
            left={(props) => (
              <List.Icon
                {...props}
                icon={supa ? "checkbox-outline" : "checkbox-blank-outline"}
              />
            )}
            right={(props) => <Text>250rsd</Text>}
          />
          <Divider />
        </List.Accordion>
        <Divider />

        <List.Accordion
          title="Večera"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
          style={{ backgroundColor: "#F1F1F1" }}
        >
          <List.Item
            title="Veal Cutlet with Chicken Mushroom Rotini"
            onPress={handleOmlet}
            left={(props) => (
              <List.Icon
                {...props}
                icon={omlet ? "checkbox-outline" : "checkbox-blank-outline"}
              />
            )}
            right={(props) => <Text>299rsd</Text>}
          />
          <Divider />
        </List.Accordion>
        <Divider />

        <List.Accordion
          title="Pića"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
          style={{ backgroundColor: "#F1F1F1" }}
        >
          <List.Item
            title="Kafa"
            onPress={handleKafa}
            left={(props) => (
              <List.Icon
                {...props}
                icon={kafa ? "checkbox-outline" : "checkbox-blank-outline"}
              />
            )}
            right={(props) => <Text>120rsd</Text>}
          />
          <Divider />
          <List.Item
            title="Koka-Kola"
            onPress={handleKola}
            left={(props) => (
              <List.Icon
                {...props}
                icon={kola ? "checkbox-outline" : "checkbox-blank-outline"}
              />
            )}
            right={(props) => <Text>150rsd</Text>}
          />
          <Divider />
        </List.Accordion>
        <Divider />
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton
          mode="contained"
          icon="cash"
          onPress={() => {
            navigation.navigate("Korpa");
          }}
        >
          Naruči
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};
