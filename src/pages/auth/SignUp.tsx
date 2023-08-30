import EmailIconSvg from '@/assets/icons/EmailIconSvg';
import PasswordIconSvg from '@/assets/icons/PasswordIconSvg';
import ShowPasswordSvg from '@/assets/icons/ShowPasswordSvg';
import UsernameIconSvg from '@/assets/icons/UsernameIconSvg';
import Center from '@/components/form/Center';
import FoodButton from '@/components/form/FoodButton';
import FoodCheckbox from '@/components/form/FoodCheckbox';
import FoodGradientButton from '@/components/form/FoodGradientButton';
import FoodInput from '@/components/form/FoodInput';
import FoodText from '@/components/form/FoodText';
import {AuthStackParamList} from '@/navigation/auth';
import {SignUpStackParamList} from '@/navigation/auth/signup';
import {colors} from '@/utils/colors';
import {font, normalize} from '@/utils/responsive';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import FloatingContainer from './components/FloatingContainer';

type SignUpProps = {} & CompositeScreenProps<
  NativeStackScreenProps<SignUpStackParamList, 'SignUp'>,
  NativeStackScreenProps<AuthStackParamList>
>;

const SignUp: React.FC<SignUpProps> = ({navigation}) => {
  const {width} = Dimensions.get('screen');

  const [showPassword, setShowPassword] = useState(false);
  const [keepMeSignedIn, setKeepMeSignedIn] = useState(false);
  const [emailSpecialPricing, setEmailSpecialPricing] = useState(false);
  return (
    <View style={{flex: 1, flexGrow: 1}}>
      <FloatingContainer width={width} />
      <SafeAreaView
        style={{flex: 1, backgroundColor: colors.white}}
        edges={['top']}>
        <KeyboardAwareScrollView
          automaticallyAdjustContentInsets
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1, flexGrow: 1, zIndex: 99999}}
          style={styles.signUpContainerStyle}
          bounces={false}>
          <Center style={styles.signUpTextContainer}>
            <FoodText fontFamily={'Bold'} fontSize={font.xlarge}>
              Sign Up For Free
            </FoodText>
          </Center>
          <View style={styles.signUpFormStyle}>
            <FoodInput
              placeholder="Username"
              textInputStyle={styles.signUpInputStyle}
              leftIcon={<UsernameIconSvg />}
            />
            <FoodInput
              placeholder="Email"
              textInputStyle={styles.signUpInputStyle}
              leftIcon={<EmailIconSvg />}
            />
            <FoodInput
              placeholder="Password"
              secureTextEntry={showPassword}
              textInputStyle={styles.signUpInputStyle}
              leftIcon={<PasswordIconSvg />}
              rightIcon={
                <FoodButton onPress={() => setShowPassword(show => !show)}>
                  <ShowPasswordSvg />
                </FoodButton>
              }
            />
          </View>
          <View style={styles.checkboxContainerStyle}>
            <FoodCheckbox
              value={keepMeSignedIn}
              onValueChange={val => setKeepMeSignedIn(val)}>
              Keep Me Signed In
            </FoodCheckbox>
            <FoodCheckbox
              value={emailSpecialPricing}
              onValueChange={val => setEmailSpecialPricing(val)}>
              Email Me About Special Pricing
            </FoodCheckbox>
          </View>
          <Center style={styles.loginButtonContainer}>
            <FoodGradientButton
              containerStyle={[styles.loginButtonStyle]}
              onPress={() => navigation.navigate('PersonalInfo')}
              colors={['#53E88B', '#15BE77']}
              activeOpacity={0.8}>
              <FoodText
                fontFamily={'Bold'}
                color={'white'}
                fontSize={font.medium}>
                Create Account
              </FoodText>
            </FoodGradientButton>
          </Center>
          <Center>
            <FoodButton onPress={() => navigation.navigate('SignIn')}>
              <FoodText
                color={colors.primary.green}
                fontSize={font.mini}
                textInputStyle={{
                  textDecorationLine: 'underline',
                }}
                fontFamily={'Semibold'}>
                already have an account?
              </FoodText>
            </FoodButton>
          </Center>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpContainerStyle: {
    flex: 1,
    backgroundColor: colors.white,
    zIndex: 9999,
  },
  signUpTextContainer: {
    marginBottom: normalize(40),
  },
  signUpFormStyle: {
    backgroundColor: colors.white,
    paddingHorizontal: normalize(24),
    rowGap: normalize(10),
    display: 'flex',
    flexDirection: 'column',
    marginBottom: normalize(10),
  },
  signUpInputStyle: {
    height: normalize(50),
    paddingHorizontal: normalize(10),
    color: 'black',
    shadowColor: 'rgba(90,108,234,0.10)',
    shadowRadius: 26,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 25,
    },
    elevation: 10,
  },
  signUpOrButtonContainerStyle: {
    flexDirection: 'row',
    paddingHorizontal: normalize(24),
    columnGap: normalize(20),
    marginVertical: normalize(20),
  },
  checkboxContainerStyle: {
    marginTop: normalize(20),
    marginBottom: normalize(40),
    paddingHorizontal: normalize(24),
    rowGap: normalize(10),
  },
  signUpOrButton: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(16),
    paddingVertical: normalize(16),
    columnGap: normalize(10),
    borderWidth: 1,
    borderColor: colors.placeholderColor(0.7),
    shadowColor: 'rgba(90,108,234,0.10)',
    shadowRadius: 26,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 25,
    },
    elevation: 10,
  },
  loginButtonStyle: {
    height: normalize(56),
    maxWidth: normalize(150),
    width: normalize(150),
    borderRadius: normalize(16),
  },
  loginButtonContainer: {
    marginVertical: normalize(20),
  },
});
export default SignUp;
