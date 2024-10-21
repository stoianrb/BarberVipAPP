import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import ImageViewing from 'react-native-image-viewing';

// Imaginile pentru galerie
const images = [
  require('../assets/images/b.jpg'),
  require('../assets/images/b2.jpg'),
  require('../assets/images/bangladesh1.jpg'),
  require('../assets/images/bangladesh2.jpg'),
  require('../assets/images/bv1.jpg'),
  require('../assets/images/bv2.jpg'),
  require('../assets/images/c1.jpg'),
  require('../assets/images/c2.jpg'),
  require('../assets/images/copil1.jpg'),
  require('../assets/images/copil2.jpg'),
  require('../assets/images/james1.jpg'),
  require('../assets/images/james2.jpg'),
  require('../assets/images/n.jpg'),
  require('../assets/images/radu1.jpg'),
  require('../assets/images/radu2.jpg'),
  require('../assets/images/radu3.jpg'),
  require('../assets/images/radu4.jpg'),
  require('../assets/images/v1.jpg'),
];

export default function PhotoGalleryScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openImage = (index) => {
    setSelectedImageIndex(index);
    setIsVisible(true);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => openImage(index)}>
      <Image source={item} style={styles.imageThumbnail} />
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../assets/fundal/background.jpg')} // Înlocuiește cu calea către imaginea ta de fundal
      style={styles.background}
      resizeMode="cover" // Asigură-te că imaginea de fundal se acoperă
    >
      <View style={styles.container}>
        <Text style={styles.title}>Photo Gallery</Text>
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={styles.flatListContent}
        />
        
        {/* Vizualizare imagini full-screen */}
        <ImageViewing
          images={images.map((img) => ({ uri: Image.resolveAssetSource(img).uri }))}
          imageIndex={selectedImageIndex}
          visible={isVisible}
          onRequestClose={() => setIsVisible(false)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ocupă întreaga zonă
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundal alb semi-transparent pentru a face textul mai ușor de citit
    borderRadius: 10, // Colțuri rotunjite pentru container
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  flatListContent: {
    alignItems: 'center',
  },
  imageThumbnail: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
