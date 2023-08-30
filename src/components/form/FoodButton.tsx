import {LinearGradient} from 'react-native-linear-gradient';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

type FoodButtonProps = {
  containerStyle?: ViewStyle | ViewStyle[];
} & TouchableOpacityProps;
const FoodButton: React.FC<FoodButtonProps> = props => {
  const {containerStyle, ...touchableOpacityProps} = props;
  return (
    <TouchableOpacity style={[containerStyle]} {...touchableOpacityProps}>
      {touchableOpacityProps.children}
    </TouchableOpacity>
  );
};
export default FoodButton;
