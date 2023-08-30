import {SVGComponentPropType, normalize} from '@/utils/responsive';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const GooogleRoundedLogo: React.FC<SVGComponentPropType> = ({
  width = 25,
  height = 25,
}) => {
  return (
    <Svg width={normalize(width)} height={normalize(height)} viewBox="0 0 25 25" fill="none">
      <G clipPath="url(#clippath)">
        <Path
          d="M24.3917 12.7339C24.3917 11.7097 24.3087 10.9622 24.129 10.1871H12.4453V14.81H19.3034C19.1652 15.9589 18.4185 17.689 16.7593 18.8516L16.736 19.0064L20.4302 21.8712L20.6861 21.8968C23.0367 19.7237 24.3917 16.5264 24.3917 12.7339Z"
          fill="#4285F4"
        />
        <Path
          d="M12.4455 24.9141C15.8054 24.9141 18.626 23.8068 20.6863 21.8967L16.7594 18.8516C15.7086 19.5852 14.2982 20.0973 12.4455 20.0973C9.15469 20.0973 6.36168 17.9243 5.36604 14.9208L5.22011 14.9332L1.37885 17.909L1.32861 18.0488C3.37497 22.1181 7.57836 24.9141 12.4455 24.9141Z"
          fill="#34A853"
        />
        <Path
          d="M5.36624 14.9208C5.10354 14.1457 4.9515 13.3152 4.9515 12.457C4.9515 11.5988 5.10354 10.7684 5.35242 9.99331L5.34546 9.82823L1.45607 6.80457L1.32881 6.86516C0.485411 8.5538 0.00146484 10.4501 0.00146484 12.457C0.00146484 14.464 0.485411 16.3602 1.32881 18.0488L5.36624 14.9208Z"
          fill="#FBBC05"
        />
        <Path
          d="M12.4455 4.8167C14.7822 4.8167 16.3584 5.8271 17.2572 6.67147L20.7692 3.23884C18.6123 1.23187 15.8053 0 12.4455 0C7.57835 0 3.37497 2.7959 1.32861 6.86517L5.35222 9.99332C6.36167 6.98979 9.15468 4.8167 12.4455 4.8167Z"
          fill="#EB4335"
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

export default GooogleRoundedLogo;
