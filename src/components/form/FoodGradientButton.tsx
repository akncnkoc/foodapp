import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';

type FoodGradientButtonProps = {
  colors: Array<string>;
  containerStyle?: StyleProp<any>;
  activeOpacity?: number;
} & TouchableOpacityProps;
const FoodGradientButton: React.FC<FoodGradientButtonProps> = props => {
  const {
    colors,
    activeOpacity = 1,
    containerStyle,
    ...touchableOpacityProps
  } = props;
  return (
    <TouchableOpacity
      {...touchableOpacityProps}
      activeOpacity={activeOpacity}
      style={[styles.linearGradientStyle, containerStyle]}>
      <LinearGradient
        colors={colors}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={[styles.linearGradientStyle, containerStyle]}>
        {touchableOpacityProps.children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linearGradientStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FoodGradientButton;
