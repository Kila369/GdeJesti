import React, { useRef, useState, useContext } from "react";
import { Camera, CameraType } from "expo-camera";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
import { View } from "react-native";
import { Text } from "../../../components/typhography/text.component";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../services/auth service/auth.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const CameraButton = styled(TouchableOpacity)`
  background-color: #fff;
  border-radius: 180px;
  z-index: 10;
  padding: 5px;
  margin: 0 auto;
  top: 80%;
`;

const CameraOutline = styled(View)`
  background-color: #000;
  border-radius: 180px;
  z-index: 15;
  padding: 3px;
`;

const InnerCameraButton = styled(View)`
  background-color: #fff;
  border-radius: 180px;
  z-index: 20;
  padding: 42px;
`;

export const CameraScreen = ({ navigation }) => {
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);
  const { user } = useContext(AuthContext);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  return (
    <ProfileCamera
      type={type}
      ratio={"16:9"}
      ref={(camera) => (cameraRef.current = camera)}
    >
      <CameraButton onPress={snap} mode="contained">
        <CameraOutline>
          <InnerCameraButton />
        </CameraOutline>
      </CameraButton>
    </ProfileCamera>
  );
};
