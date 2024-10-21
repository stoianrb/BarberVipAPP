import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const videoLinks = [
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

// Dimensiuni pentru player
const PLAYER_HEIGHT = 250;

const VideoItem = React.memo(({ videoId, isPlaying, onPress }) => {
  return (
    <View style={styles.videoContainer}>
      <YoutubePlayer
        height={PLAYER_HEIGHT}
        play={isPlaying}
        videoId={videoId}
        webViewProps={{ onLoad: () => console.log('Video loaded') }}
      />
    </View>
  );
});

export default function VideoGalleryScreen() {
  const [currentVideoId, setCurrentVideoId] = useState(null);

  const togglePlayVideo = useCallback((videoId) => {
    setCurrentVideoId((prevVideoId) => (prevVideoId === videoId ? null : videoId));
  }, []);

  const renderItem = useCallback(({ item }) => (
    <VideoItem
      videoId={item}
      isPlaying={currentVideoId === item}
      onPress={() => togglePlayVideo(item)}
    />
  ), [currentVideoId, togglePlayVideo]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Video Gallery</Text>

      <FlatList
        data={videoLinks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContent}
        initialNumToRender={5} // Numărul inițial de videoclipuri de încărcat
        maxToRenderPerBatch={5} // Numărul maxim de videoclipuri randate pe batch
        windowSize={5} // Mărimea ferestrei pentru randare
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  videoContainer: {
    marginBottom: 10,
  },
});
