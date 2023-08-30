import {SVGComponentPropType, normalize} from '@/utils/responsive';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const TimesIconSvg: React.FC<SVGComponentPropType> = ({
  width = 19,
  height = 19,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none">
      <Rect
        x={13.2048}
        y={4.09808}
        width={1.28788}
        height={12.8788}
        rx={0.643942}
        transform="rotate(45 13.205 4.098)"
        fill="#FEFEFF"
      />
      <Rect
        x={14.1152}
        y={13.2048}
        width={1.28788}
        height={12.8788}
        rx={0.643942}
        transform="rotate(135 14.115 13.205)"
        fill="#FEFEFF"
      />
    </Svg>
  );
};

export default TimesIconSvg;
