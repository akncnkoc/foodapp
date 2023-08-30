import {SVGComponentPropType, normalize} from '@/utils/responsive';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const FacebookRoundedLogo: React.FC<SVGComponentPropType> = ({
  width = 25,
  height = 25,
}) => {
  return (
    <Svg width={normalize(width)} height={normalize(height)} viewBox="0 0 25 25" fill="none">
      <G clipPath="url(#clippath)">
        <Path
          d="M12.5 25.0001C19.4036 25.0001 25 19.4036 25 12.5001C25 5.5965 19.4036 6.10352e-05 12.5 6.10352e-05C5.59644 6.10352e-05 0 5.5965 0 12.5001C0 19.4036 5.59644 25.0001 12.5 25.0001Z"
          fill="#3C5A9A"
        />
        <Path
          d="M16.5644 3.83691H13.7954C12.1521 3.83691 10.3244 4.52804 10.3244 6.91C10.3324 7.73997 10.3244 8.53483 10.3244 9.4294H8.42334V12.4545H10.3832V21.1632H13.9845V12.397H16.3615L16.5766 9.42091H13.9225C13.9225 9.42091 13.9284 8.09702 13.9225 7.71255C13.9225 6.77125 14.9019 6.82516 14.9608 6.82516C15.4269 6.82516 16.3332 6.82651 16.5658 6.82516V3.83691H16.5644Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clippath">
          <Rect width={normalize(width)} height={normalize(height)} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default FacebookRoundedLogo;
