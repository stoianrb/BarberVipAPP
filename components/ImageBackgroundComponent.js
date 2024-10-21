import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const ImageBackgroundComponent = ({ imageSource, children }) => {
  return (
    <ImageBackground source={imageSource} style={styles.background}>
      <View style={styles.overlay}>
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    borderRadius: 10,
  },
});

export default ImageBackgroundComponent;
