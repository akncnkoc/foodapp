import { colors } from '@/utils/colors';
import { FontFamily } from '@/utils/fonts';
import { font, normalize } from '@/utils/responsive';
import React from 'react';
import { StyleSheet, TextStyle, View, ViewProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Path, Svg } from 'react-native-svg';
import FoodButton from './FoodButton';
import FoodText from './FoodText';

type FoodCheckboxProps = {
  value?: boolean;
  onValueChange?: (newValue: boolean) => void;
  checkBoxTextStyle?: TextStyle;
} & ViewProps;
const FoodCheckbox: React.FC<FoodCheckboxProps> = props => {
  const {value, onValueChange, ...checkBoxProps} = props;
  return (
    <View style={styles.checkboxContainerStyle}>
      <FoodButton
        containerStyle={styles.buttonStyle}
        activeOpacity={1}
        onPress={() => onValueChange && onValueChange(!value)}>
        <LinearGradient
          colors={['#53E88B', '#15BE77']}
          style={styles.checkboxStyle}>
          <View>
            {value && (
              <>
                <Svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <Path
                    d="M9 1L3.5 6.5L1 4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
              </>
            )}
          </View>
        </LinearGradient>
        <FoodText style={styles.textStyle}>{checkBoxProps.children}</FoodText>
      </FoodButton>
    </View>
  );
};
const styles = StyleSheet.create({
  checkboxContainerStyle: {
    position: 'relative',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: normalize(5),
  },
  checkboxStyle: {
    width: normalize(22),
    height: normalize(22),
    borderWidth: 1,
    borderColor: '#f4f4f4',
    backgroundColor: colors.primary.green,
    borderRadius: normalize(22),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: font.mini,
    fontFamily: FontFamily.Thin,
    color: 'rgba(0,0,0,.6)',
  },
});
export default FoodCheckbox;
