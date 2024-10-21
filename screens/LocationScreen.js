import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function LocationScreen() {
  // Adresa salonului
  const address = "Șoseaua Pantelimon 309, Salon Eduard Forfecuta, Robert Frizeru";

  // Funcția pentru a deschide Google Maps
  const openMap = () => {
    // Formatează adresa pentru a o utiliza în Google Maps
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openMap}>
        <Text style={styles.text}>Find us at:</Text>
        <Text style={styles.addressText}>{address}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 18,
  },
  addressText: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF', // Culoarea albastră pentru a indica un link
  },
});
