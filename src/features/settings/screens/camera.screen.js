import { Camera, CameraType, FlashMode } from "expo-camera";
import { useContext, useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../../../services/authentication/auth.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PreviewScreen from "./previewScreen";
export const CameraScreen = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [preview, setPreview] = useState(false);
  const cameraRef = useRef();
  const { user } = useContext(AuthContext);
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  function toggleFlashMode() {
    setFlashMode((current) =>
      current === FlashMode.off ? FlashMode.on : FlashMode.off
    );
  }
  function acceptPhoto() {
    navigation.navigate("All Settings");
  }
  function rejectPhoto() {
    setPreview(false);
  }
  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      if (source) {
        await AsyncStorage.setItem(`${user.uid}-photo`, source);
        await cameraRef.current.pausePreview();
        setPreview(true);
        console.log("picture", source);
      }
    }
  };
  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  return !preview ? (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        onCameraReady={onCameraReady}
        type={type}
        flashMode={flashMode}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          disabled={!isCameraReady}
          style={styles.button}
          onPress={toggleCameraType}
        >
          <FontAwesome6 name="camera-rotate" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!isCameraReady}
          style={styles.snap}
          onPress={takePicture}
        >
          <FontAwesome6 name="camera" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleFlashMode}>
          {flashMode === FlashMode.off && (
            <Ionicons name="flash-off" size={30} color="white" />
          )}
          {flashMode === FlashMode.on && (
            <Ionicons name="flash" size={30} color="white" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <PreviewScreen acceptPhoto={acceptPhoto} rejectPhoto={rejectPhoto} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    bottom: 20,
    width: "100%",
    justifyContent: "space-between",
    position: "absolute",
    alignItems: "center",
  },
  button: {
    padding: 20,
  },
  snap: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: "50%",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
