import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ImageBackground, ScrollView, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { LanguageContext } from '../LanguageContext';
import { saveAppointments, loadAppointments } from '../appointmentsService';

export default function AppointmentsScreen({ navigation }) {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const loadedAppointments = await loadAppointments();
      setAppointments(loadedAppointments);
    };

    fetchAppointments();
  }, []);

  const onChange = (event, selectedDate) => {
    if (event.type === 'dismissed') {
      setShow(false);
      return;
    }

    const currentDate = selectedDate || (mode === 'date' ? date : time);
    setShow(false);

    if (mode === 'date') {
      setDate(currentDate);
    } else {
      setTime(currentDate);
    }
  };

  const showDatepicker = () => {
    setShow(true);
    setMode('date');
  };

  const showTimepicker = () => {
    setShow(true);
    setMode('time');
  };

  const handleAddAppointment = async () => {
    if (!name || !phone) {
      Alert.alert(getText('errorTitle'), getText('errorMessage'));
      return;
    }

    const formattedDate = date.toLocaleDateString();
    const formattedTime = time.toLocaleTimeString();

    // Verifică dacă există deja o programare la aceeași dată și oră
    const appointmentExists = appointments.some(appointment => 
      appointment.date === formattedDate && appointment.time === formattedTime
    );

    if (appointmentExists) {
      Alert.alert(getText('errorTitle'), getText('appointmentExistsMessage'));
      return;
    }

    const newAppointment = {
      date: formattedDate,
      time: formattedTime,
      name,
      phone,
    };

    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    setName('');
    setPhone('');

    await saveAppointments(updatedAppointments);

    Alert.alert(getText('successTitle'), getText('successMessage'));
  };

  const getText = (key) => {
    const translations = {
      ro: {
        title: 'Programează-te!',
        namePlaceholder: 'Nume',
        phonePlaceholder: 'Telefon',
        selectDate: 'Selectează data',
        selectTime: 'Selectează ora',
        done: 'Finalizat',
        appointments: 'Programări:',
        goBack: 'Înapoi',
        selectedDate: 'Data selectată: ',
        selectedTime: 'Ora selectată: ',
        successMessage: 'Programarea a fost adăugată cu succes!',
        errorTitle: 'Eroare',
        errorMessage: 'Te rugăm să introduci numele și numărul de telefon.',
        successTitle: 'Succes',
        appointmentExistsMessage: 'Există deja o programare la această dată și oră.',
      },
      en: {
        title: 'New Appointment',
        namePlaceholder: 'Name',
        phonePlaceholder: 'Phone',
        selectDate: 'Select Date',
        selectTime: 'Select Time',
        done: 'Done',
        appointments: 'Appointments:',
        goBack: 'Go back',
        selectedDate: 'Selected Date: ',
        selectedTime: 'Selected Time: ',
        successMessage: 'Appointment has been added successfully!',
        errorTitle: 'Error',
        errorMessage: 'Please enter your name and phone number.',
        successTitle: 'Success',
        appointmentExistsMessage: 'There is already an appointment at this date and time.',
      },
    };

    return translations[language][key];
  };

  return (
    <ImageBackground
      source={require('../assets/fundal/background.jpg')}
      style={styles.background}
      imageStyle={{ opacity: 0.5 }}
    >
      <View style={styles.languageButtonsContainer} pointerEvents="auto">
        <TouchableOpacity style={styles.languageButton} onPress={() => toggleLanguage('ro')}>
          <Text style={styles.languageButtonText}>Română</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.languageButton} onPress={() => toggleLanguage('en')}>
          <Text style={styles.languageButtonText}>English</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.overlay}>
        {/* Adăugăm un spațiu suplimentar înainte de titlu */}
        <View style={styles.spacer} />

        <Text style={styles.title}>{getText('title')}</Text>

        <TextInput
          style={styles.input}
          placeholder={getText('namePlaceholder')}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder={getText('phonePlaceholder')}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <TouchableOpacity style={styles.button} onPress={showDatepicker}>
          <Text style={styles.buttonText}>{getText('selectDate')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showTimepicker}>
          <Text style={styles.buttonText}>{getText('selectTime')}</Text>
        </TouchableOpacity>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={mode === 'date' ? date : time}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}

        <Text style={styles.selectedText}>{getText('selectedDate')}{date.toLocaleDateString()}</Text>
        <Text style={styles.selectedText}>{getText('selectedTime')}{time.toLocaleTimeString()}</Text>

        <TouchableOpacity style={styles.button} onPress={handleAddAppointment}>
          <Text style={styles.buttonText}>{getText('done')}</Text>
        </TouchableOpacity>

        <View style={styles.appointmentList}>
          <Text style={styles.appointmentTitle}>{getText('appointments')}</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={styles.headerCell}>{getText('selectedDate')}</Text>
              <Text style={styles.headerCell}>{getText('selectedTime')}</Text>
              <Text style={styles.headerCell}>{getText('namePlaceholder')}</Text>
              <Text style={styles.headerCell}>{getText('phonePlaceholder')}</Text>
            </View>
            {appointments.map((appointment, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.cell}>{appointment.date}</Text>
                <Text style={styles.cell}>{appointment.time}</Text>
                <Text style={styles.cell}>{appointment.name}</Text>
                <Text style={styles.cell}>{appointment.phone}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>{getText('goBack')}</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flexGrow: 1, // Permite ScrollView să ocupe întreaga înălțime
    justifyContent: 'flex-start', // Îndreaptă conținutul în sus
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
  // Spațiu suplimentar
  spacer: {
    height: 100, // Ajustează această valoare pentru a muta titlul mai sus sau mai jos
  },
  languageButtonsContainer: {
    position: 'absolute',
    top: 30,
    right: 20,
    flexDirection: 'row',
    zIndex: 10,
  },
  languageButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  languageButtonText: {
    color: '#3498db',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fundal alb semi-transparent
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#fff',
    marginBottom: 10,
  },
  appointmentList: {
    marginTop: 20,
    width: '100%',
  },
  appointmentTitle: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#2980b9',
  },
  headerCell: {
    flex: 1,
    padding: 5,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  cell: {
    flex: 1,
    padding: 5,
    color: '#fff',
    textAlign: 'center',
  },
});
