import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Linking,
  Animated,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';

const ContactScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [error, setError] = useState('');
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleSubmit = () => {
    // Verificăm dacă toate câmpurile sunt completate
    if (!name || !phone) {
      setError('Te rugăm să completezi toate câmpurile.');
      return;
    }

    // Verificăm formatul numărului de telefon (opțional, dar recomandat)
    const phoneRegex = /^[0-9]{10,}$/; // Verifică numere de telefon cu 10+ cifre
    if (!phoneRegex.test(phone)) {
      setError('Te rugăm să introduci un număr de telefon valid.');
      return;
    }

    const newAppointment = {
      id: Date.now(),
      name,
      phone,
      date: date.toLocaleDateString(),
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setAppointments([...appointments, newAppointment]);
    setError('');
    navigation.navigate('Appointments', { appointments: [...appointments, newAppointment] });

    // Resetează câmpurile după trimitere
    resetFields();
  };

  const resetFields = () => {
    setName('');
    setPhone('');
    setDate(new Date());
    setTime(new Date());
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    setDate(selectedDate || date);
  };

  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    setTime(selectedTime || time);
  };

  const openURL = (url) => {
    Linking.openURL(url);
  };

  const callPhoneNumber = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <ImageBackground source={require('../../assets/logo.png')} style={styles.background}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Programare</Text>
        
        <TextInput
          placeholder="Nume"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Telefon"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          keyboardType="phone-pad"
        />
        
        <TouchableOpacity style={styles.button} onPress={() => setShowDatePicker(true)}>
          <Text style={styles.buttonText}>Alege Data</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>

        <TouchableOpacity style={styles.button} onPress={() => setShowTimePicker(true)}>
          <Text style={styles.buttonText}>Alege Ora</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
        
        {showTimePicker && (
          <DateTimePicker
            value={time}
            mode="time"
            display="default"
            onChange={handleTimeChange}
          />
        )}

        {error && <Text style={styles.errorText}>{error}</Text>}

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Trimite</Text>
        </TouchableOpacity>

        <View style={styles.socialContainer}>
          <Text style={styles.address}>Salon Eduard Forfecuta</Text>
          <Text style={styles.address}>Soseaua Pantelimon nr 309</Text>
          <TouchableOpacity onPress={() => callPhoneNumber('0770867356')}>
            <Text style={styles.address}>Telefon: 0770867356</Text>
          </TouchableOpacity>
          <View style={styles.socialIcons}>
            <TouchableOpacity onPress={() => openURL("https://www.tiktok.com/@robert_stoian")}>
              <Icon name="logo-tiktok" size={30} color="#69C9D0" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openURL("https://www.facebook.com/stoian.robert.547")}>
              <Icon name="logo-facebook" size={30} color="#4267B2" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openURL("https://www.instagram.com/robert_frizerul")}>
              <Icon name="logo-instagram" size={30} color="#C13584" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openURL("https://www.youtube.com/@Robert_Stoian")}>
              <Icon name="logo-youtube" size={30} color="#FF0000" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Înapoi</Text>
        </TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    margin: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
    color: '#555',
  },
  submitButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    marginVertical: 20,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  socialContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  address: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default ContactScreen;
