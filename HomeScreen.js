import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={require('../../assets/logo.jpg')} // Asigură-te că ai setat corect calea către imagine
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonColumn}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate('Contact')}
            >
              <Text style={styles.buttonText}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate('Photos')}
            >
              <Text style={styles.buttonText}>Galerie Foto</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonColumn}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate('Videos')}
            >
              <Text style={styles.buttonText}>Galerie Video</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate('Reviews')}
            >
              <Text style={styles.buttonText}>Recenzii</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Mesaj de copyright în fundul paginii */}
      <Text style={styles.copyrightText}>
        © {new Date().getFullYear()} Nu îmi asum responsabilitatea pentru eventualele probleme sau buguri.
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9, // Am crescut opacitatea pentru a îmbunătăți lizibilitatea textului
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    paddingBottom: 40, // Adăugat padding pentru a evita suprapunerea cu textul de copyright
  },
  buttonColumn: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16, // Am adăugat mărime text pentru butoane
  },
  copyrightText: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundal semitransparent pentru textul de copyright
    padding: 10,
  },
});

export default HomeScreen;
