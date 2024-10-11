// src/screens/VideoGalleryScreen.js

import React from 'react';
import { View, StyleSheet, ImageBackground, Text, Button, FlatList } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const VideoGalleryScreen = ({ navigation }) => {
  // Lista de videoclipuri
  const videos = [
    'bjAmfXNMUmM',
    'y0UW042pZJY',
    'd42KWaRI_BI',
    'r9dJGK954IY',
    'XnpY9tsrhMo',
    'VSiOr0EBQuE',
    'mifSwgkgsXY',
    '_v0aFbUvJ1Y',
    '81C34WYKJuM',
    'c0Z3oGIFetM',
    'ou71NHazyWU',
    'FfG-3885rlw',
    'uv-IN2MUbe4',
    'VC9JYf26xik',
    'tcHUyY4XGDE',
    'YkpIh6qOlE4',
    '2ATTaZXA8xk',
    'KXg3GFy0qtw',
    'XmtpBUWOpac',
  ];

  // Rendu pentru fiecare element al listei
  const renderItem = ({ item }) => (
    <View style={styles.videoContainer}>
      <YoutubePlayer
        height={200}
        play={false} // Poți schimba acest parametru pentru a reda automat
        videoId={item}
        onReady={() => console.log('Video is ready')}
        onChangeState={state => console.log(`Player state: ${state}`)}
      />
    </View>
  );

  return (
    <ImageBackground source={require('../../assets/logo.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Galerie Video</Text>

        <FlatList
          data={videos}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2} // Setează numărul de coloane
          columnWrapperStyle={styles.columnWrapper} // Stiluri pentru coloane
          contentContainerStyle={styles.listContainer} // Stiluri pentru containerul listei
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Înapoi"
            onPress={() => navigation.goBack()} // Navighează înapoi
            color="#007AFF"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    alignItems: 'center',
    flex: 1, // Extinde containerul pe tot ecranul
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Culoare albă pentru titlu pentru un contrast bun
    textAlign: 'center',
  },
  videoContainer: {
    width: '48%', // Ajustează lățimea pentru a lăsa spațiu între coloane
    height: 200, // Înălțimea video-ului
    marginVertical: 5,
  },
  columnWrapper: {
    justifyContent: 'space-between', // Spațiere între coloane
  },
  listContainer: {
    paddingBottom: 20, // Spațiu la baza listei
  },
  buttonContainer: {
    marginVertical: 20,
    width: '80%', // Lățimea butonului
  },
});

export default VideoGalleryScreen;
