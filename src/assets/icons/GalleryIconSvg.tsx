import {SVGComponentPropType} from '@/utils/responsive';
import {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
  Svg,
} from 'react-native-svg';

const GalleryIconSvg: React.FC<SVGComponentPropType> = ({
  width = 50,
  height = 50,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 50 50" fill="none">
      <G clipPath="url(#clip0_169_22927)">
        <Path
          d="M22.397 44.788c-4.88 0-8.853-3.973-8.853-8.853V6.288L3.48 8.593C.993 9.247-.499 11.812.16 14.322l8.628 32.216C9.36 48.62 11.275 50 13.329 50c.385 0 .777-.048 1.165-.15l20.998-5.062H22.397z"
          fill="#B0BEC5"
        />
        <Path
          d="M50 5.729v30.206a5.726 5.726 0 01-5.73 5.728H22.397a5.73 5.73 0 01-5-2.937 5.682 5.682 0 01-.728-2.791V5.729A5.726 5.726 0 0122.397 0H44.27A5.726 5.726 0 0150 5.729z"
          fill="#ECEFF1"
        />
        <Path
          d="M31.25 14.582a4.166 4.166 0 11-8.332 0 4.166 4.166 0 018.333 0z"
          fill="#FFC107"
        />
        <Path
          d="M50 24.873v11.061a5.726 5.726 0 01-5.73 5.73H22.398a5.73 5.73 0 01-5-2.938l20.645-20.644a3.672 3.672 0 015.166 0L50 24.872z"
          fill="#388E3C"
        />
        <Path
          d="M43.874 41.663H22.397a5.73 5.73 0 01-5-2.937 5.682 5.682 0 01-.728-2.791v-4.813l5.75-5.75a3.671 3.671 0 015.165 0l16.29 16.291z"
          fill="#4CAF50"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_169_22927">
          <Path fill="#fff" d="M0 0H50V50H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default GalleryIconSvg;
