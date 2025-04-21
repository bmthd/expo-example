import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { ImageViewer } from "./components/ImageViewer";
import { Button } from "./components/Button";
import PlaceholderImage from "./assets/images/background-image.png";

export default function App() {
  return (
    <View className="flex-1 bg-[#25292e] items-center">
      <View className="flex-1 pt-14">
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View className="flex-1/3 items-center">
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
