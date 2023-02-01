/* eslint-disable react/no-unstable-nested-components */
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { View, TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthContext } from "../../../services/auth service/auth.context";
import { Text } from "../../../components/typhography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainter = styled(View)`
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);

  const getProfileImage = async (currUser) => {
    const photoUri = await AsyncStorage.getItem(`${currUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfileImage(user);
  }, [user]);

  return (
    <SafeArea>
      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        <AvatarContainter>
          {!photo ? (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          ) : (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
          <Spacer size="large">
            <Text variante="caption">{user.email}</Text>
          </Spacer>
        </AvatarContainter>
      </TouchableOpacity>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Log out"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
