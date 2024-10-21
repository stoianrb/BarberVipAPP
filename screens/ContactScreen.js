import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Linking, TouchableOpacity, Button } from 'react-native';

export default function ContactScreen({ navigation }) {
  const [language, setLanguage] = useState('en');

  const handlePhonePress = () => {
    Linking.openURL('tel:0770867356');
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ro' : 'en'));
  };

  const handleReviewsPress = () => {
    navigation.navigate('Reviews'); // Asigură-te că "Reviews" este adăugat în navigator
  };

  return (
    <ImageBackground
      source={require('../assets/fundal/background.jpg')}
      style={styles.background}
      imageStyle={{ opacity: 0.3 }}
    >
      <View style={styles.container}>
        <View style={styles.languageButtonContainer}>
          <Button title={language === 'en' ? 'Română' : 'English'} onPress={toggleLanguage} />
        </View>

        <Text style={styles.title}>
          {language === 'en' ? 'Contact Us' : 'Contactează-ne'}
        </Text>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>
            {language === 'en' ? 'Address' : 'Adresă'}:
          </Text>
          <Text style={styles.info}>Șoseaua Pantelimon Nr. 309</Text>

          <Text style={styles.label}>
            {language === 'en' ? 'Salon' : 'Salon'}:
          </Text>
          <Text style={styles.info}>Eduard Forfecuță</Text>

          <Text style={styles.label}>
            {language === 'en' ? 'Contact' : 'Contact'}:
          </Text>
          <TouchableOpacity onPress={handlePhonePress}>
            <Text style={[styles.info, styles.phone]}>Robert - 0770867356</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.scheduleContainer}>
          <Text style={styles.subTitle}>
            {language === 'en' ? 'Working Hours' : 'Program'}
          </Text>
          <View style={styles.scheduleTextContainer}>
            <Text style={styles.scheduleText}>
              {language === 'en' ? 'Week 1:' : 'Săptămâna 1:'}
            </Text>
            <View style={styles.scheduleDays}>
              <Text style={styles.scheduleDay}>{language === 'en' ? 'Monday' : 'Luni'}</Text>
              <Text style={styles.scheduleTime}>09:00 - 20:00</Text>
            </View>
            <View style={styles.scheduleDays}>
              <Text style={styles.scheduleDay}>{language === 'en' ? 'Wednesday' : 'Miercuri'}</Text>
              <Text style={styles.scheduleTime}>09:00 - 20:00</Text>
            </View>
            <View style={styles.scheduleDays}>
              <Text style={styles.scheduleDay}>{language === 'en' ? 'Friday' : 'Vineri'}</Text>
              <Text style={styles.scheduleTime}>09:00 - 20:00</Text>
            </View>

            <Text style={styles.scheduleText}>
              {language === 'en' ? 'Week 2:' : 'Săptămâna 2:'}
            </Text>
            <View style={styles.scheduleDays}>
              <Text style={styles.scheduleDay}>{language === 'en' ? 'Tuesday' : 'Marți'}</Text>
              <Text style={styles.scheduleTime}>09:00 - 20:00</Text>
            </View>
            <View style={styles.scheduleDays}>
              <Text style={styles.scheduleDay}>{language === 'en' ? 'Thursday' : 'Joi'}</Text>
              <Text style={styles.scheduleTime}>09:00 - 20:00</Text>
            </View>
            <View style={styles.scheduleDays}>
              <Text style={styles.scheduleDay}>{language === 'en' ? 'Saturday' : 'Sâmbătă'}</Text>
              <Text style={styles.scheduleTime}>09:00 - 19:00</Text>
            </View>
            <View style={styles.scheduleDays}>
              <Text style={styles.scheduleDay}>{language === 'en' ? 'Sunday' : 'Duminică'}</Text>
              <Text style={styles.scheduleTime}>09:00 - 15:00</Text>
            </View>
          </View>
        </View>

        <View style={styles.reviewButtonContainer}>
          <TouchableOpacity style={styles.reviewButton} onPress={handleReviewsPress}>
            <Text style={styles.reviewButtonText}>
              {language === 'en' ? 'Leave a Review' : 'Lasă o Recenzie'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
  },
  languageButtonContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 5,
  },
  info: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 5,
    textAlign: 'center',
  },
  phone: {
    textDecorationLine: 'underline',
  },
  scheduleContainer: {
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  scheduleTextContainer: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
  },
  scheduleText: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 3,
    textAlign: 'left',
  },
  scheduleDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  scheduleDay: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 3,
    width: '50%',
    textAlign: 'left',
  },
  scheduleTime: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 3,
    width: '50%',
    textAlign: 'right',
  },
  reviewButtonContainer: {
    marginTop: 20,
  },
  reviewButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  reviewButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
