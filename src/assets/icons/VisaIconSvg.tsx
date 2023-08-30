import {SVGComponentPropType} from '@/utils/responsive';
import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const VisaIconSvg: React.FC<SVGComponentPropType> = ({
  width = 52,
  height = 18,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 52 18"
      fill="none">
      <Path
        d="M22.643 16.919h-4.12l2.575-15.826h4.12l-2.575 15.826zM15.056 1.093l-3.928 10.885-.465-2.344-1.386-7.117S9.11 1.093 7.323 1.093H.829l-.077.268s1.986.413 4.31 1.808l3.58 13.75h4.293l6.556-15.826h-4.435zm32.408 15.826h3.784L47.949 1.092h-3.312c-1.53 0-1.902 1.18-1.902 1.18L36.59 16.919h4.295l.859-2.351h5.238l.482 2.35zm-4.533-5.599l2.164-5.922 1.218 5.922H42.93zm-6.019-6.422L37.5 1.5S35.686.81 33.794.81c-2.045 0-6.9.893-6.9 5.239 0 4.088 5.699 4.14 5.699 6.287 0 2.147-5.112 1.763-6.8.408l-.612 3.554s1.84.894 4.651.894c2.812 0 7.054-1.456 7.054-5.419 0-4.115-5.75-4.498-5.75-6.287 0-1.79 4.013-1.56 5.776-.588z"
        fill="#2566AF"
      />
    </Svg>
  );
};

export default VisaIconSvg;
