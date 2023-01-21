import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurant service/restaurants.context";
import { ActivityIndicator } from "react-native-paper";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const RestaurantsScreen = () => {
  const { isLoading, restaurants, error } = useContext(RestaurantsContext);
  if (isLoading) {
    return (
      <LoadingContainer>
        <ActivityIndicator animating={true} color={"tomato"} size={"large"} />
      </LoadingContainer>
    );
  }
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          // onChangeText={onChangeSearch}
          // value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
