import BGPattern from '@/assets/utils/BGPattern';
import Center from '@/components/form/Center';
import FoodGradientButton from '@/components/form/FoodGradientButton';
import FoodText from '@/components/form/FoodText';
import SignUpSuccessIconSvg from '@/assets/icons/SignUpSuccessIconSvg';
import {SignUpStackParamList} from '@/navigation/auth/signup';
import {colors} from '@/utils/colors';
import {font, normalize} from '@/utils/responsive';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

type SignUpSuccessProps = {} & NativeStackScreenProps<
  SignUpStackParamList,
  'SignUpSuccess'
>;
const SignUpSuccess: React.FC<SignUpSuccessProps> = ({navigation}) => {
  const {width} = Dimensions.get('screen');

  return (
    <View style={{flex: 1, flexGrow: 1}}>
      <View
        style={{
          height: 260,
          width: width,
          position: 'absolute',
          zIndex: 999999,
          borderRadius: 20,
          flex: 1,
        }}>
        <LinearGradient
          colors={['white', 'rgba(255,255,255,0.1)']}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0.4}}
          style={{
            zIndex: 9999,
            position: 'absolute',
            width: width,
            height: 260,
          }}
        />
        <BGPattern height={260} />
      </View>
      <SafeAreaView style={{flex: 1, flexGrow: 1, zIndex: 999, backgroundColor: 'white'}} edges={['top']}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            flexGrow: 1,
            backgroundColor: 'transparent',
          }}
          style={styles.signUpSuccessContainerStyle}
          bounces={false}>
          <View
            style={{
              flex: 1,
              flexGrow: 1,
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
            }}>
            <Center>
              <SignUpSuccessIconSvg />
            </Center>
            <Center
              style={{marginTop: normalize(30), marginBottom: normalize(12)}}>
              <FoodText
                fontFamily={'Bold'}
                fontSize={normalize(30)}
                color={colors.primary.greenAccent}>
                Congrats!
              </FoodText>
            </Center>
            <Center>
              <FoodText fontFamily={'Bold'} fontSize={font.xxxxlarge}>
                Your Profile Is Ready To Use
              </FoodText>
            </Center>
          </View>
          <Center style={styles.loginButtonContainer}>
            <FoodGradientButton
              containerStyle={[styles.loginButtonStyle]}
              colors={['#53E88B', '#15BE77']}
              activeOpacity={0.1}>
              <FoodText
                fontFamily={'Bold'}
                color={'white'}
                fontSize={font.medium}>
                Try Order
              </FoodText>
            </FoodGradientButton>
          </Center>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpSuccessContainerStyle: {
    backgroundColor: colors.white,
    zIndex: 9999,
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
    marginVertical: normalize(30),
  },
});
export default SignUpSuccess;
