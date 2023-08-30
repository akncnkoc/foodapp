import FacebookRoundedLogo from '@/assets/icons/FacebookRoundedLogo';
import GooogleRoundedLogo from '@/assets/icons/GooogleRoundedLogo';
import Center from '@/components/form/Center';
import FoodButton from '@/components/form/FoodButton';
import FoodGradientButton from '@/components/form/FoodGradientButton';
import FoodInput from '@/components/form/FoodInput';
import FoodText from '@/components/form/FoodText';
import {AuthStackParamList} from '@/navigation/auth';
import {colors} from '@/utils/colors';
import {font, normalize} from '@/utils/responsive';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFormik} from 'formik';
import {Dimensions, StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as yup from 'yup';
import FloatingContainer from './components/FloatingContainer';
type SignInProps = {} & NativeStackScreenProps<AuthStackParamList, 'SignIn'>;
type SignInFormProps = {
  email: string;
  password: string;
};
const SignIn: React.FC<SignInProps> = ({navigation}) => {
  const {width} = Dimensions.get('screen');
  const signUpFormik = useFormik<SignInFormProps>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required('Email cannot be empty')
        .email('Email is not valid'),
      password: yup.string().required('Password cannot be empty'),
    }),
    onSubmit: () => {},
  });
  return (
    <View style={{flex: 1, flexGrow: 1}}>
      <FloatingContainer width={width} />
      <SafeAreaView
        style={{flex: 1, backgroundColor: colors.white, zIndex: 9999}}
        edges={['top']}>
        <KeyboardAwareScrollView
          automaticallyAdjustContentInsets
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1, flexGrow: 1, zIndex: 99999}}
          style={styles.signInContainerStyle}
          bounces={false}>
          <Center style={styles.signInTextContainer}>
            <FoodText fontFamily={'Bold'} fontSize={font.xlarge}>
              Login To Your Account
            </FoodText>
          </Center>
          <View style={styles.signInFormStyle}>
            <FoodInput
              placeholder="Email"
              textInputStyle={styles.signInInputStyle}
              keyboardType="email-address"
              autoComplete="email"
              value={signUpFormik.values.email}
              onBlur={signUpFormik.handleBlur('email')}
              onChangeText={signUpFormik.handleChange('email')}
              error={signUpFormik.errors.email}
            />
            <FoodInput
              placeholder="Password"
              textInputStyle={styles.signInInputStyle}
              autoComplete="password"
              value={signUpFormik.values.password}
              onBlur={signUpFormik.handleBlur('password')}
              onChangeText={signUpFormik.handleChange('password')}
              error={signUpFormik.errors.password}
            />
          </View>
          <Center>
            <FoodText fontFamily={'Bold'} fontSize={font.mini}>
              Or Continue With
            </FoodText>
          </Center>
          <Center style={styles.signInOrButtonContainerStyle}>
            <FoodButton containerStyle={styles.signInOrButton}>
              <FacebookRoundedLogo />
              <FoodText fontFamily={'Semibold'}>Facebook</FoodText>
            </FoodButton>
            <FoodButton containerStyle={styles.signInOrButton}>
              <GooogleRoundedLogo />
              <FoodText fontFamily={'Semibold'}>Google</FoodText>
            </FoodButton>
          </Center>
          <Center>
            <FoodText
              color={colors.primary.green}
              fontSize={font.mini}
              textInputStyle={{
                textDecorationLine: 'underline',
              }}
              fontFamily={'Semibold'}>
              Forgot Your Password?
            </FoodText>
          </Center>
          <Center style={styles.loginButtonContainer}>
            <FoodGradientButton
              onPress={() => signUpFormik.handleSubmit()}
              containerStyle={[styles.loginButtonStyle]}
              colors={['#53E88B', '#15BE77']}
              activeOpacity={0.1}>
              <FoodText
                fontFamily={'Bold'}
                color={'white'}
                fontSize={font.medium}>
                Login
              </FoodText>
            </FoodGradientButton>
          </Center>
          <Center>
            <FoodButton onPress={() => navigation.navigate('SignUpStack')}>
              <FoodText
                color={colors.primary.green}
                fontSize={font.mini}
                textInputStyle={{
                  textDecorationLine: 'underline',
                }}
                fontFamily={'Semibold'}>
                Sign Up with E-Mail?
              </FoodText>
            </FoodButton>
          </Center>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  signInContainerStyle: {
    flex: 1,
    backgroundColor: colors.white,
    zIndex: 9999,
  },
  signInTextContainer: {
    marginBottom: normalize(40),
  },
  signInFormStyle: {
    backgroundColor: colors.white,
    paddingHorizontal: normalize(24),
    rowGap: normalize(20),
    flexDirection: 'column',
    marginBottom: normalize(10),
  },
  signInInputStyle: {
    height: normalize(50),
    paddingHorizontal: normalize(20),
    color: 'black',
    shadowColor: 'rgba(90,108,234,0.10)',
    shadowRadius: 26,
    shadowOpacity: 1,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 25,
    },
    elevation: 10,
  },
  signInOrButtonContainerStyle: {
    flexDirection: 'row',
    paddingHorizontal: normalize(24),
    columnGap: normalize(20),
    marginVertical: normalize(20),
  },
  signInOrButton: {
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
export default SignIn;
