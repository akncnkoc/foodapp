import Geolocation from '@react-native-community/geolocation';

export const isLocationGranted = async () => {
  let isGranted = false;
  Geolocation.requestAuthorization(
    () => (isGranted = true),
    err => (isGranted = false),
  );
  isGranted ? Promise.resolve(true) : Promise.resolve(false);
};
