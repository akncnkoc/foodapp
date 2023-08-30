import PayoneerIconSvg from '@/assets/icons/PayoneerIconSvg';
import PaypalIconSvg from '@/assets/icons/PaypalIconSvg';
import VisaIconSvg from '@/assets/icons/VisaIconSvg';
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
import { Dimensions, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

type PaymentMethodScreenProps = NativeStackScreenProps<
  SignUpStackParamList,
  'PaymentMethod'
>;
const PaymentMethod: React.FC<PaymentMethodScreenProps> = ({navigation}) => {
  const {width} = Dimensions.get('screen');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(-1);
  const paymentMethods = [
    <PaypalIconSvg />,
    <VisaIconSvg />,
    <PayoneerIconSvg />,
  ];
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
                Payment Method
              </FoodText>
              <FoodText
                fontFamily="Thin"
                fontSize={font.mini}
                textInputStyle={{maxWidth: normalize(240)}}>
                This data will be displayed in your account profile for security
              </FoodText>
            </View>
            <View style={styles.inputContainer}>
              {paymentMethods.map((paymentMethod, paymentMethodIndex) => (
                <FoodButton
                  key={paymentMethodIndex}
                  onPress={() => setSelectedPaymentMethod(paymentMethodIndex)}
                  activeOpacity={0.8}
                  style={[
                    styles.paymentMethodButton,
                    {
                      borderColor:
                        paymentMethodIndex === selectedPaymentMethod
                          ? colors.primary.first
                          : colors.placeholderColor(0.2),
                    },
                  ]}>
                  {paymentMethod}
                </FoodButton>
              ))}
            </View>
          </View>
          <Center style={{marginBottom: normalize(50)}}>
            <FoodGradientButton
              containerStyle={[styles.nextButtonStyle]}
              onPress={() => navigation.navigate('UploadPhoto')}
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
  paymentMethodButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    height: normalize(70),
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
});
export default PaymentMethod;
