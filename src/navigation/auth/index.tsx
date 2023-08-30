import SignIn from '@/pages/auth/SignIn';
import SignUp from '@/pages/auth/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpStack from './signup';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUpStack: undefined;
};

const AuthStack = () => {
  const AuthStack = createNativeStackNavigator<AuthStackParamList>();
  return (
    <AuthStack.Navigator initialRouteName={'SignIn'}>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{navigationBarHidden: true, headerShown: false}}
      />
      <AuthStack.Screen
        name="SignUpStack"
        component={SignUpStack}
        options={{navigationBarHidden: true, headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStack;
