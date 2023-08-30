import {colors} from '@/utils/colors';
import {FontFamily, FontFamilyTypes} from '@/utils/fonts';
import {font, normalize} from '@/utils/responsive';
import {PropsWithRef} from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import FoodText from './FoodText';

type FoodInputProps = {
  placeholder?: string;
  fontFamily?: FontFamilyTypes;
  textInputStyle?: TextStyle;
  leftIcon?: React.ReactNode;
  leftIconContainerStyle?: ViewStyle | ViewStyle[];
  rightIcon?: React.ReactNode;
  rightIconContainerStyle?: ViewStyle | ViewStyle[];
  error?: string | undefined;
} & PropsWithRef<TextInputProps>;

const FoodInput: React.FC<FoodInputProps> = props => {
  const {
    fontFamily,
    textInputStyle,
    leftIcon,
    leftIconContainerStyle,
    rightIcon,
    rightIconContainerStyle,
    error,
  } = props;
  const errorStyle: TextStyle = error
    ? {
        borderColor: colors.primary.errorBorder,
      }
    : {};
  return (
    <View>
      <View style={[styles.containerStyle, errorStyle]}>
        {leftIcon && (
          <View style={[styles.leftIconContainerStyle, leftIconContainerStyle]}>
            {leftIcon}
          </View>
        )}
        <TextInput
          placeholderTextColor={colors.placeholderColor(0.3)}
          style={[{fontFamily}, styles.inputDefaultStyle, textInputStyle]}
          autoCapitalize="none"
          autoCorrect={false}
          maxFontSizeMultiplier={0}
          allowFontScaling={false}
          {...props}
        />
        {rightIcon && (
          <View
            style={[styles.rightIconContainerStyle, rightIconContainerStyle]}>
            {rightIcon}
          </View>
        )}
      </View>
      {error && (
        <View style={styles.errorContainer}>
          <FoodText color={colors.primary.errorText}>{error}</FoodText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    position: 'relative',
    width: '100%',
    height: normalize(50),
    flexDirection: 'row',
    borderColor: '#f4f4f4',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: normalize(16),
    overflow: 'hidden',
  },
  errorContainer: {
    marginTop: normalize(10),
    paddingHorizontal: normalize(5),
  },
  inputDefaultStyle: {
    fontFamily: FontFamily.Regular,
    flex: 1,
    display: 'flex',
    fontSize: font.small,
    verticalAlign: 'middle',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIconContainerStyle: {
    zIndex: 99,
    height: normalize(50),
    paddingLeft: normalize(10),
    justifyContent: 'center',
  },
  rightIconContainerStyle: {
    zIndex: 99999999,
    height: normalize(50),
    paddingRight: normalize(16),
    justifyContent: 'center',
  },
});
export default FoodInput;
