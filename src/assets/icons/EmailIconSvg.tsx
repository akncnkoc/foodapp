import { SVGComponentPropType } from "@/utils/responsive";
import { Defs, G, LinearGradient, Path, Stop, Svg } from "react-native-svg";

const EmailIconSvg: React.FC<SVGComponentPropType> = ({width = 24,height = 24}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none">
      <G opacity="0.5">
        <Path
          opacity="0.4"
          d="M22 15.9402C22 18.7302 19.76 20.9902 16.97 21.0002H16.96H7.05C4.27 21.0002 2 18.7502 2 15.9602V15.9502C2 15.9502 2.006 11.5242 2.014 9.29818C2.015 8.88018 2.495 8.64618 2.822 8.90618C5.198 10.7912 9.447 14.2282 9.5 14.2732C10.21 14.8422 11.11 15.1632 12.03 15.1632C12.95 15.1632 13.85 14.8422 14.56 14.2622C14.613 14.2272 18.767 10.8932 21.179 8.97718C21.507 8.71618 21.989 8.95018 21.99 9.36718C22 11.5762 22 15.9402 22 15.9402Z"
          fill="url(#paint0)"
        />
        <Path
          d="M21.4759 5.67357C20.6099 4.04157 18.9059 2.99957 17.0299 2.99957H7.04988C5.17388 2.99957 3.46988 4.04157 2.60388 5.67357C2.40988 6.03857 2.50188 6.49357 2.82488 6.75157L10.2499 12.6906C10.7699 13.1106 11.3999 13.3196 12.0299 13.3196C12.0339 13.3196 12.0369 13.3196 12.0399 13.3196C12.0429 13.3196 12.0469 13.3196 12.0499 13.3196C12.6799 13.3196 13.3099 13.1106 13.8299 12.6906L21.2549 6.75157C21.5779 6.49357 21.6699 6.03857 21.4759 5.67357Z"
          fill="url(#paint1)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0"
          x1="2"
          y1="8.04774"
          x2="24.2102"
          y2="13.6875"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#53E88B" />
          <Stop offset="1" stopColor="#15BE77" />
        </LinearGradient>
        <LinearGradient
          id="paint1"
          x1="2.50293"
          y1="2.36589"
          x2="23.3417"
          y2="8.33326"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#53E88B" />
          <Stop offset="1" stopColor="#15BE77" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default EmailIconSvg;
