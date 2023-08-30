import Onboarding from '@/pages/onboarding';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from '../auth';

export type RootStackParamList = {
  Onboarding: undefined;
  AuthStack: undefined
};

const MainStack = () => {
  const MainStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <MainStack.Navigator initialRouteName={'AuthStack'}>
      <MainStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{navigationBarHidden: true, headerShown: false}}
      />
      <MainStack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{navigationBarHidden: true, headerShown: false}}
      />
    </MainStack.Navigator>
  );
};

export default MainStack;
