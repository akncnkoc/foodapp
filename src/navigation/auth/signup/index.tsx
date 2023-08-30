import PaymentMethod from '@/pages/auth/signup/PaymentMethod';
import PersonalInfo from '@/pages/auth/signup/Personalnfo';
import SetLocation from '@/pages/auth/signup/SetLocation';
import SignUp from '@/pages/auth/SignUp';
import UploadPhoto from '@/pages/auth/signup/UploadPhoto';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpSuccess from '@/pages/auth/signup/SignUpSuccess';

export type SignUpStackParamList = {
  SignUp: undefined;
  PersonalInfo: undefined;
  PaymentMethod: undefined;
  UploadPhoto: undefined;
  SetLocation: undefined;
  SignUpSuccess: undefined;
};

const SignUpStack = () => {
  const SignUpStack = createNativeStackNavigator<SignUpStackParamList>();
  return (
    <SignUpStack.Navigator
      initialRouteName={'SignUp'}
      screenOptions={{navigationBarHidden: true, headerShown: false}}>
      <SignUpStack.Screen name="SignUp" component={SignUp} />
      <SignUpStack.Screen name="PersonalInfo" component={PersonalInfo} />
      <SignUpStack.Screen name="PaymentMethod" component={PaymentMethod} />
      <SignUpStack.Screen name="UploadPhoto" component={UploadPhoto} />
      <SignUpStack.Screen name="SetLocation" component={SetLocation} />
      <SignUpStack.Screen name="SignUpSuccess" component={SignUpSuccess} />
    </SignUpStack.Navigator>
  );
};

export default SignUpStack;
