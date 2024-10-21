// src/components/ConsentBanner.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CookieManager from 'react-native-cookies';

const ConsentBanner = () => {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const checkConsent = async () => {
      const cookies = await CookieManager.getAll();
      setConsentGiven(!!cookies['your_cookie_name']); // Înlocuiește cu numele cookie-ului tău
    };

    checkConsent();
  }, []);

  const handleAccept = async () => {
    // Setează un cookie pentru a salva consimțământul
    await CookieManager.set({
      name: 'your_cookie_name',
      value: 'accepted',
      path: '/',
      version: '1',
      expires: '2030-01-01T00:00:00.000Z',
    });
    setConsentGiven(true);
  };

  if (consentGiven) {
    return null; // Nu afișa banner-ul dacă consimțământul a fost dat
  }

  return (
    <View style={styles.banner}>
      <Text style={styles.text}>
        Folosim cookies pentru a îmbunătăți experiența ta. Acceptă utilizarea cookies-urilor.
      </Text>
      <Button title="Accept" onPress={handleAccept} />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#3498db',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    marginBottom: 10,
  },
});

export default ConsentBanner;
