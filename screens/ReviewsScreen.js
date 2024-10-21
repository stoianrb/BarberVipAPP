import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ImageBackground, FlatList, Alert } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

// Componente pentru recenzie
const Review = ({ name = 'Anonim', message = 'Fără mesaj', rating = 0 }) => {
  return (
    <View style={styles.review}>
      <Text style={styles.reviewName}>{name}</Text>
      <Text style={styles.reviewMessage}>{message}</Text>
      <AirbnbRating
        count={5}
        defaultRating={rating}
        size={20}
        isDisabled
        selectedColor={'#FFD700'}
      />
    </View>
  );
};

const ReviewsScreen = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleSubmit = () => {
    if (name === '' || message === '' || rating === 0) {
      Alert.alert('Eroare', 'Te rog completează toate câmpurile!');
      return;
    }

    const newReview = { name, message, rating };
    setReviews([...reviews, newReview]);
    Alert.alert('Mulțumim!', 'Recenzia ta a fost trimisă cu succes!');
    setName('');
    setMessage('');
    setRating(0);
  };

  return (
    <ImageBackground
      source={require('../assets/fundal/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Lăsați o recenzie</Text>

        <TextInput
          style={styles.input}
          placeholder="Numele tău"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Mesajul tău"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
        />

        <Text style={styles.ratingText}>Alegeți evaluarea:</Text>
        <AirbnbRating
          count={5}
          defaultRating={0}
          size={30}
          onFinishRating={setRating}
          selectedColor={'#FFD700'}
        />

        <Button title="Trimite Recenzia" onPress={handleSubmit} />

        <View style={styles.reviewsContainer}>
          <Text style={styles.reviewsTitle}>Recenziile Trimise:</Text>
          <FlatList
            data={reviews}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Review name={item.name} message={item.message} rating={item.rating} />
            )}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ReviewsScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#fff',
  },
  ratingText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  reviewsContainer: {
    marginTop: 20,
    width: '100%',
    flex: 1,
  },
  reviewsTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  review: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  reviewName: {
    fontWeight: 'bold',
  },
  reviewMessage: {
    marginVertical: 5,
  },
});
