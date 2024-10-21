// appointmentsService.js
import * as FileSystem from 'expo-file-system';

const filePath = FileSystem.documentDirectory + 'appointments.json';

export const saveAppointments = async (appointments) => {
  try {
    await FileSystem.writeAsStringAsync(filePath, JSON.stringify(appointments));
    console.log('Programările au fost salvate cu succes!');
  } catch (error) {
    console.error('Eroare la salvarea programărilor: ', error);
  }
};

export const loadAppointments = async () => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(filePath);
    if (fileInfo.exists) {
      const data = await FileSystem.readAsStringAsync(filePath);
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Eroare la citirea programărilor: ', error);
    return [];
  }
};
