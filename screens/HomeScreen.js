import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Linking } from 'react-native';
import { LanguageContext } from '../LanguageContext'; // Importăm LanguageContext
import Icon from 'react-native-vector-icons/Ionicons'; // Importăm iconițele

export default function HomeScreen({ navigation }) {
  const { language, toggleLanguage } = useContext(LanguageContext); // Folosim contextul pentru a obține limba și funcția de schimbare

  // Funcție pentru a obține textul în funcție de limba selectată
  const getText = (key) => {
    const translations = {
      ro: {
        title: 'BarberVip!',
        appointments: 'Programează',
        contact: 'Contact',
        location: 'Locație',
        photoGallery: 'Galerie Foto',
        videoGallery: 'Galerie Video',
        changeLanguage: 'Schimbă limba',
        socialMedia: 'Urmărește-ne:',
        copyright: '© 2024 BarberVip. Toate drepturile rezervate. Nu ne asumăm responsabilitatea pentru eventualele probleme și buguri.',
      },
      en: {
        title: 'BarberVip!',
        appointments: 'Appointments',
        contact: 'Contact',
        location: 'Location',
        photoGallery: 'Photo Gallery',
        videoGallery: 'Video Gallery',
        changeLanguage: 'Change Language',
        socialMedia: 'Follow us:',
        copyright: '© 2024 BarberVip. All rights reserved. We do not assume responsibility for any issues or bugs.',
      },
    };

    return translations[language][key];
  };

  return (
    <ImageBackground
      source={require('../assets/fundal/background.jpg')}
      style={styles.background}
      imageStyle={{ opacity: 0.7 }} // Opacitate ajustată pentru fundal
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>{getText('title')}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Appointments')}
        >
          <Text style={styles.buttonText}>{getText('appointments')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Contact')}
        >
          <Text style={styles.buttonText}>{getText('contact')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Location')}
        >
          <Text style={styles.buttonText}>{getText('location')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PhotoGallery')}
        >
          <Text style={styles.buttonText}>{getText('photoGallery')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('VideoGallery')}
        >
          <Text style={styles.buttonText}>{getText('videoGallery')}</Text>
        </TouchableOpacity>

        {/* Secțiunea pentru rețelele sociale */}
        <View style={styles.socialMediaContainer}>
          <Text style={styles.socialMediaText}>{getText('socialMedia')}</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.tiktok.com/@robert_stoian')}>
              <Icon name="logo-tiktok" size={30} color="#69C9E2" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/stoian.robert.547')}>
              <Icon name="logo-facebook" size={30} color="#3b5998" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/@Robert_Stoian')}>
              <Icon name="logo-youtube" size={30} color="#FF0000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/robert_frizerul')}>
              <Icon name="logo-instagram" size={30} color="#C13584" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Mesaj de copyright */}
        <Text style={styles.copyrightText}>{getText('copyright')}</Text>
      </View>

      {/* Butonul de alegere a limbii mutat în colțul din dreapta sus */}
      <TouchableOpacity
        style={styles.languageButtonAbsolute} // Stil pentru butonul de schimbare a limbii
        onPress={toggleLanguage}
      >
        <Text style={styles.languageButtonText}>
          {language === 'ro' ? 'Română' : 'English'}
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#fff',
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: '#3498db',
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 10,
    width: '70%',
    alignItems: 'center',
  },
  socialMediaContainer: {
    marginTop: 20,
    alignItems: 'center', // Centerare pe axa orizontală
    width: '100%', // Lățimea totală pentru a se centra
  },
  socialMediaText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribuie iconițele cu spațiu între ele
    width: '70%', // Lățimea dorită a containerului de iconițe
  },
  copyrightText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  languageButtonAbsolute: {
    position: 'absolute',
    top: 30,
    right: 20,
    backgroundColor: 'transparent', // Fără fundal pentru butonul de limbă
  },
  languageButtonText: {
    color: '#3498db', // Albastru pentru română
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
