import { SVGComponentPropType } from '@/utils/responsive';
import { Defs, G, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

const UsernameIconSvg: React.FC<SVGComponentPropType> = ({
  width = 24,
  height = 24,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none">
      <G opacity="0.5">
        <Path
          d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z"
          fill="url(#paint0)"
        />
        <Path
          opacity="0.4"
          d="M11.9971 12.5837C14.9351 12.5837 17.2891 10.2287 17.2891 7.29169C17.2891 4.35469 14.9351 1.99969 11.9971 1.99969C9.06008 1.99969 6.70508 4.35469 6.70508 7.29169C6.70508 10.2287 9.06008 12.5837 11.9971 12.5837Z"
          fill="url(#paint1)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0"
          x1="4"
          y1="14.7555"
          x2="20.7046"
          y2="20.8207"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#53E88B" />
          <Stop offset="1" stopColor="#15BE77" />
        </LinearGradient>
        <LinearGradient
          id="paint1"
          x1="6.70508"
          y1="1.3498"
          x2="18.9233"
          y2="3.24284"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#53E88B" />
          <Stop offset="1" stopColor="#15BE77" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default UsernameIconSvg;
