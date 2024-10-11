// src/screens/ReviewsScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

const ReviewsScreen = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleSubmit = () => {
    if (name && message && rating) {
      setReviews([...reviews, { id: Date.now().toString(), name, message, rating }]);
      setName('');
      setMessage('');
      setRating(0);
    }
  };

  const renderReview = ({ item }) => (
    <View style={styles.reviewContainer}>
      <Text style={styles.reviewName}>{item.name}</Text>
      <Text style={styles.reviewStars}>{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</Text>
      <Text style={styles.reviewMessage}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recenzii</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nume"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Mesaj"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <View style={styles.ratingContainer}>
          <Text>Rating:</Text>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => setRating(star)}>
                <Text style={styles.star}>{star <= rating ? '★' : '☆'}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <Button title="Trimite Recenzia" onPress={handleSubmit} />
      </View>

      <FlatList
        data={reviews}
        renderItem={renderReview}
        keyExtractor={item => item.id}
        style={styles.reviewsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  star: {
    fontSize: 24,
    color: '#FFD700', // Gold color for stars
    marginHorizontal: 2,
  },
  reviewsList: {
    marginTop: 20,
  },
  reviewContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  reviewName: {
    fontWeight: 'bold',
  },
  reviewStars: {
    color: '#FFD700', // Gold color for stars
  },
  reviewMessage: {
    marginTop: 5,
  },
});

export default ReviewsScreen;
