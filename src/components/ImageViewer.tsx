import { FC } from "react";
import { StyleSheet, Image, ImageSourcePropType } from "react-native";

export const ImageViewer: FC<{ placeholderImageSource: ImageSourcePropType }> = ({
  placeholderImageSource,
}) => {
  return <Image source={placeholderImageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
