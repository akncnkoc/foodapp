import { FontFamily, FontFamilyTypes } from '@/utils/fonts';
import { font } from '@/utils/responsive';
import { PropsWithRef } from 'react';
import { ColorValue, StyleSheet, Text, TextInputProps, TextStyle } from 'react-native';

type FoodTextProps = {
  fontFamily?: FontFamilyTypes;
  fontSize?: number;
  textInputStyle?: TextStyle;
  color?: ColorValue;
} & PropsWithRef<TextInputProps>;

const FoodText: React.FC<FoodTextProps> = (props) => {
  const { fontFamily, fontSize, textInputStyle, color } = props;
  return (
    <Text
      style={[
        styles.textDefaultStyle,
        { fontFamily: FontFamily[fontFamily ?? 'Regular'], fontSize, color },
        textInputStyle,
      ]}
      allowFontScaling={false}
      {...props}></Text>
  );
};

const styles = StyleSheet.create({
  textDefaultStyle: {
    fontFamily: FontFamily.Regular,
    fontSize: font.medium,
  },
});
export default FoodText;
