import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 375;
const heightBaseScale = SCREEN_HEIGHT / 812;

export function normalize(size: number, based = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export interface FontType {
  /**
   * @param mini - Default Value = 12
   */
  mini: number;
  /**
   * @param small - Default Value = 14
   */
  small: number;
  /**
   * @param medium - Default Value = 16
   */
  medium: number;
  /**
   * @param large - Default Value = 18
   */
  large: number;
  /**
   * @param xlarge - Default Value = 20
   */
  xlarge: number;
  /**
   * @param xxlarge - Default Value = 22
   */
  xxlarge: number;
  /**
   * @param xxxlarge - Default Value = 24
   */
  xxxlarge: number;

  /**
   * @param xxxxlarge - Default Value = 26
   */
  xxxxlarge: number;
}
export const font: FontType = {
  mini: normalize(12),
  small: normalize(14),
  medium: normalize(16),
  large: normalize(18),
  xlarge: normalize(20),
  xxlarge: normalize(22),
  xxxlarge: normalize(24),
  xxxxlarge: normalize(26),
} as const;

export type SVGComponentPropType = {
  width?: number |string;
  height?: number |string;
};
