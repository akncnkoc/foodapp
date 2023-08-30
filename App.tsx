import React from 'react';
import {StatusBar, View} from 'react-native';
import 'react-native-reanimated'
import MainStack, { RootStackParamList } from './src/navigation/main';
import {NavigationContainer, createNavigationContainerRef} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geocoder from 'react-native-geocoding';

function App(): JSX.Element {
  const navigationRef = createNavigationContainerRef<RootStackParamList>();
  Geocoder.init("AIzaSyC3fGDanRNm-gHow-Lk072PKdjYC3vTvyA");
  return (
    <View
      style={{
        flex: 1,
      }}>
        <StatusBar hidden />
      <NavigationContainer
        ref={navigationRef}
        onReady={async () => {
          const isOnboardingPassed = await AsyncStorage.getItem(
            'isOnboardingPassed',
          );
          if (isOnboardingPassed != null) {
            navigationRef.navigate('AuthStack');
          }
        }}>
        <MainStack />
      </NavigationContainer>
    </View>
  );
}

export default App;
