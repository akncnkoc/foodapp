import ChevronRightSvg from '@/assets/utils/ChevronRightSvg';
import SmallRightAlignedBGPattern from '@/assets/utils/SmallRightAlignedBGPattern';
import Center from '@/components/form/Center';
import FoodButton from '@/components/form/FoodButton';
import FoodGradientButton from '@/components/form/FoodGradientButton';
import FoodText from '@/components/form/FoodText';
import LocationIconSvg from '@/assets/icons/LocationIconSvg';
import { SignUpStackParamList } from '@/navigation/auth/signup';
import { colors } from '@/utils/colors';
import { FontFamily } from '@/utils/fonts';
import { isLocationGranted } from '@/utils/geolocation';
import { font, normalize } from '@/utils/responsive';
import Geolocation from '@react-native-community/geolocation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Geocoder from 'react-native-geocoding';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Spinner from 'react-native-loading-spinner-overlay';
import { SafeAreaView } from 'react-native-safe-area-context';

type SetLocationScreenProps = NativeStackScreenProps<
  SignUpStackParamList,
  'SetLocation'
>;
const SetLocation: React.FC<SetLocationScreenProps> = ({navigation}) => {
  const {width} = Dimensions.get('screen');
  const [address, setAddress] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const getLocation = () => {
    setLoading(true)
    isLocationGranted().then(() => {
      Geolocation.getCurrentPosition(info => {
        setTimeout(() => {
          Geocoder.from(info.coords.latitude, info.coords.longitude)
          .then(json => {
            setAddress(json.results[0].formatted_address);
            setLoading(false)
          })
          .catch(error => console.warn(error));
        }, 1000)
      });
    });
  };
  return (
    <View style={{flex: 1}}>
      <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
          animation='fade'
          color={colors.primary.greenAccent}
          size={'large'}
        />
      <View
        style={{
          height: 325,
          width: width,
          position: 'absolute',
          zIndex: 99999,
          borderRadius: 20,
          flex: 1,
        }}>
        <SmallRightAlignedBGPattern />
      </View>
      <SafeAreaView edges={['top']} style={{zIndex: 99999999, flex: 1}}>
        <KeyboardAwareScrollView
          contentContainerStyle={{flex: 1}}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          bounces={false}>
          <View style={{flex: 1, flexGrow: 1}}>
            <View style={styles.backButtonContainer}>
              <FoodButton
                containerStyle={styles.backButton}
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}>
                <ChevronRightSvg />
              </FoodButton>
            </View>
            <View style={styles.textContainer}>
              <FoodText fontFamily="Bold" fontSize={font.xxxxlarge}>
                Set Your Location
              </FoodText>
              <FoodText
                fontFamily="Thin"
                fontSize={font.mini}
                textInputStyle={{maxWidth: normalize(240)}}>
                This data will be displayed in your account profile for security
              </FoodText>
            </View>
            <View style={{padding: normalize(20)}}>
              <View style={styles.inputContainer}>
                <View style={styles.inputContainerText}>
                  <LocationIconSvg />
                  <FoodText fontFamily={'Semibold'} fontSize={font.small}>
                    {!address ? 'Your Location': address}
                  </FoodText>
                </View>
                <FoodButton
                  activeOpacity={0.8}
                  onPress={getLocation}
                  style={[styles.setLocationButton]}>
                  <FoodText fontFamily={'Bold'}>Set Location</FoodText>
                </FoodButton>
              </View>
            </View>
          </View>
          <Center style={{marginBottom: normalize(50)}}>
            <FoodGradientButton
              containerStyle={[styles.nextButtonStyle]}
              onPress={() => navigation.navigate('SignUpSuccess')}
              colors={['#53E88B', '#15BE77']}
              activeOpacity={0.8}>
              <FoodText
                fontFamily={'Bold'}
                color={'white'}
                fontSize={font.medium}>
                Next
              </FoodText>
            </FoodGradientButton>
          </Center>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
    fontFamily: FontFamily.Regular,
    fontSize: font.small
  },
  backButtonContainer: {
    width: '100%',
    padding: normalize(25),
  },
  backButton: {
    backgroundColor: colors.primary.firstOpacity,
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    rowGap: normalize(20),
    padding: normalize(25),
  },
  inputContainer: {
    padding: normalize(15),
    rowGap: normalize(20),
    shadowColor: 'rgba(90,108,234,0.10)',
    shadowRadius: 26,
    shadowOpacity: 1,
    backgroundColor: 'white',
    borderRadius: normalize(20),
    shadowOffset: {
      width: 0,
      height: 25,
    },
    elevation: 10,
  },
  inputContainerText: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: normalize(10),
  },
  setLocationButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    rowGap: normalize(10),
    minHeight: normalize(50),
    backgroundColor: '#F6F6F6',
    borderRadius: normalize(20),
    padding: normalize(20),
    marginTop: normalize(20),
  },
  nextButtonStyle: {
    height: normalize(56),
    maxWidth: normalize(150),
    width: normalize(150),
    borderRadius: normalize(16),
  },
});
export default SetLocation;
