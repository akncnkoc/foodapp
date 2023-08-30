import GalleryIconSvg from '@/assets/icons/GalleryIconSvg';
import TakePhotoSvg from '@/assets/icons/TakePhotoSvg';
import TimesIconSvg from '@/assets/icons/TimesIconSvg';
import ChevronRightSvg from '@/assets/utils/ChevronRightSvg';
import SmallRightAlignedBGPattern from '@/assets/utils/SmallRightAlignedBGPattern';
import Center from '@/components/form/Center';
import FoodButton from '@/components/form/FoodButton';
import FoodGradientButton from '@/components/form/FoodGradientButton';
import FoodText from '@/components/form/FoodText';
import { SignUpStackParamList } from '@/navigation/auth/signup';
import { colors } from '@/utils/colors';
import { font, normalize } from '@/utils/responsive';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Alert, Dimensions, Image, StyleSheet, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

type UploadPhotoScreenProps = NativeStackScreenProps<
  SignUpStackParamList,
  'UploadPhoto'
>;
const UploadPhoto: React.FC<UploadPhotoScreenProps> = ({navigation}) => {
  const {width} = Dimensions.get('screen');
  const [image, setImage] = useState<string | undefined>();
  return (
    <View style={{flex: 1}}>
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
          bounces={false}
          showsHorizontalScrollIndicator={false}>
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
                Upload Your Photo Profile
              </FoodText>
              <FoodText
                fontFamily="Thin"
                fontSize={font.mini}
                textInputStyle={{maxWidth: normalize(240)}}>
                This data will be displayed in your account profile for security
              </FoodText>
            </View>
            {!image && (
              <View style={styles.inputContainer}>
                <FoodButton
                  onPress={async () => {
                    const response = await launchImageLibrary({
                      mediaType: 'photo',
                      presentationStyle: 'popover',
                    });
                    if (response.errorCode) {
                      Alert.alert(response.errorCode);
                    }
                    if (response.didCancel) {
                      Alert.alert('You cancelled');
                    }
                    if (response.assets) {
                      setImage(response.assets[0].uri);
                    }
                  }}
                  activeOpacity={0.8}
                  style={[styles.paymentMethodButton]}>
                  <GalleryIconSvg />
                  <FoodText fontFamily={'Bold'}>From Gallery</FoodText>
                </FoodButton>
                <FoodButton
                  onPress={async () => {
                    const response = await launchCamera({
                      mediaType: 'photo',
                      assetRepresentationMode: 'compatible',
                      cameraType: 'front',
                      includeExtra: true,
                    });
                    if (response.errorCode) {
                      Alert.alert(response.errorCode);
                    }
                    if (response.didCancel) {
                      Alert.alert('You cancelled');
                    }
                  }}
                  activeOpacity={0.8}
                  style={[styles.paymentMethodButton]}>
                  <TakePhotoSvg />
                  <FoodText fontFamily={'Bold'}>Take Photo</FoodText>
                </FoodButton>
              </View>
            )}
            {image && (
              <Center style={{marginTop: normalize(40)}}>
                <View style={styles.imageInnerContainer}>
                  <FoodButton
                    style={styles.closeButton}
                    activeOpacity={0.8}
                    onPress={() => setImage(undefined)}>
                    <TimesIconSvg />
                  </FoodButton>
                  <Image
                    style={styles.imageStyle}
                    source={{
                      uri: image,
                    }}
                    resizeMode={'cover'}
                  />
                </View>
              </Center>
            )}
          </View>
          <Center style={{marginBottom: normalize(50)}}>
            <FoodGradientButton
              containerStyle={[styles.nextButtonStyle]}
              onPress={() => navigation.navigate('SetLocation')}
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
    padding: normalize(25),
    rowGap: normalize(20),
  },
  imageInnerContainer: {
    position: 'relative',
    width: normalize(260),
    height: normalize(260),
  },
  imageStyle: {
    width: normalize(260),
    height: normalize(260),
    borderRadius: normalize(22),
  },
  paymentMethodButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
    rowGap: normalize(10),
    minHeight: normalize(130),
    padding: normalize(20),
    borderRadius: normalize(20),
    shadowColor: 'rgba(90,108,234,0.10)',
    shadowRadius: 26,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 25,
    },
    elevation: 10,
  },
  nextButtonStyle: {
    height: normalize(56),
    maxWidth: normalize(150),
    width: normalize(150),
    borderRadius: normalize(16),
  },
  closeButton: {
    position: 'absolute',
    top: normalize(10),
    right: normalize(10),
    width: normalize(30),
    height: normalize(30),
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(30),
  },
});
export default UploadPhoto;
