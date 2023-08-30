import BGPattern from '@/assets/utils/BGPattern';
import Center from '@/components/form/Center';
import FoodButton from '@/components/form/FoodButton';
import FoodGradientButton from '@/components/form/FoodGradientButton';
import FoodInput from '@/components/form/FoodInput';
import FoodText from '@/components/form/FoodText';
import FacebookRoundedLogo from '@/components/icons/FacebookRoundedLogo';
import GooogleRoundedLogo from '@/components/icons/GooogleRoundedLogo';
import {colors} from '@/utils/colors';
import {font, normalize} from '@/utils/responsive';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const SignIn: React.FC = () => {
  const windowSize = Dimensions.get('window');
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: colors.white}}
      edges={['top']}>
      <ScrollView style={styles.signUpContainerStyle} bounces={false}>
        <View
          style={{
            height: 300,
            width: '100%',
            position: 'absolute',
          }}>
          <BGPattern />
        </View>
        <Center style={{zIndex: 999}} safeArea>
          <Image
            source={require('@/assets/utils/logo.png')}
            style={{
              width: 185,
              height: 200,
            }}
          />
        </Center>
        <Center style={styles.signUpTextContainer}>
          <FoodText fontFamily={'Bold'} fontSize={font.xlarge}>
            Login To Your Account
          </FoodText>
        </Center>
        <View style={styles.signUpFormStyle}>
          <FoodInput
            placeholder="Email"
            textInputStyle={styles.signUpInputStyle}
          />
          <FoodInput
            placeholder="Password"
            textInputStyle={styles.signUpInputStyle}
          />
        </View>
        <Center>
          <FoodText fontFamily={'Bold'} fontSize={font.mini}>
            Or Continue With
          </FoodText>
        </Center>
        <Center style={styles.signUpOrButtonContainerStyle}>
          <FoodButton containerStyle={styles.signUpOrButton}>
            <FacebookRoundedLogo />
            <FoodText fontFamily={'Semibold'}>Facebook</FoodText>
          </FoodButton>
          <FoodButton containerStyle={styles.signUpOrButton}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signUpContainerStyle: {
    flex: 1,
    backgroundColor: colors.white,
    zIndex: 9999,
  },
  signUpTextContainer: {
    marginTop: normalize(60),
    marginBottom: normalize(40),
  },
  signUpFormStyle: {
    backgroundColor: colors.white,
    paddingHorizontal: normalize(24),
    rowGap: normalize(5),
    display: 'flex',
    flexDirection: 'column',
    marginBottom: normalize(10),
  },
  signUpInputStyle: {
    height: normalize(40),
    paddingHorizontal: normalize(20),
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
export default SignIn;
