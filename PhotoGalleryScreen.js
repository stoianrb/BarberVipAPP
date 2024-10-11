// src/screens/PhotoGalleryScreen.js

import React from 'react';
import { View, Image, ScrollView, StyleSheet, ImageBackground, Text, Button } from 'react-native';

const PhotoGalleryScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/logo.png')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Galerie Foto</Text>

        <View style={styles.photoContainer}>
          {/* Asigură-te că toate imaginile există în folderul assets */}
          <Image source={require('../../assets/bv1.jpg')} style={styles.photo} />
          <Image source={require('../../assets/bv2.jpg')} style={styles.photo} />
          <Image source={require('../../assets/b.jpg')} style={styles.photo} />
          <Image source={require('../../assets/b2.jpg')} style={styles.photo} />
          <Image source={require('../../assets/n.jpg')} style={styles.photo} />
          <Image source={require('../../assets/v1.jpg')} style={styles.photo} />
          <Image source={require('../../assets/c1.jpg')} style={styles.photo} />
          <Image source={require('../../assets/c2.jpg')} style={styles.photo} />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Înapoi"
            onPress={() => navigation.goBack()} // Navighează înapoi
            color="#007AFF"
          />
        </View>

        {/* Copyright în fundul paginii, dacă este necesar */}
        {/* 
        <Text style={styles.copyright}>
          &copy; {new Date().getFullYear()} Barber VIP. Toate drepturile rezervate.
        </Text> 
        */}
      </ScrollView>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Culoare albă pentru titlu pentru un contrast bun
    textAlign: 'center',
  },
  photoContainer: {
    flexDirection: 'row', // Afișează imaginile pe rând
    flexWrap: 'wrap', // Permite imaginilor să se împacheteze pe mai multe rânduri
    justifyContent: 'center', // Center pentru a alinia imaginile
  },
  photo: {
    width: 150, // Lățimea imaginii
    height: 150, // Înălțimea imaginii
    resizeMode: 'cover',
    margin: 5, // Spațiu între imagini
    borderRadius: 10, // Adaugă colțuri rotunjite pentru un aspect plăcut
  },
  buttonContainer: {
    marginVertical: 20,
    width: '80%', // Lățimea butonului
  },
  copyright: {
    textAlign: 'center',
    marginTop: 20, // Spațiu deasupra copyright-ului
    color: '#333', // Culoare închisă pentru copyright
  },
});

export default PhotoGalleryScreen;
