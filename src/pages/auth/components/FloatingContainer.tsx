import BGPattern from '@/assets/utils/BGPattern';
import Center from '@/components/form/Center';
import { Image, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type FloatingContainerProps = {
  width?: number;
};
const FloatingContainer: React.FC<FloatingContainerProps> = ({width}) => {
  return (
    <View style={[styles.floatingContainerStyle, {width}]}>
      <LinearGradient
        colors={['white', 'rgba(255,255,255,0.1)']}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0.8}}
        style={[styles.linearGradientStyle, {width}]}
      />
      <View>
        <BGPattern height={250} />
      </View>
      <Center style={[styles.logoContainerStyle, {width}]}>
        <Image
          source={require('@/assets/utils/logo.png')}
          style={{
            width: 185,
            height: 200,
          }}
        />
      </Center>
    </View>
  );
};
const styles = StyleSheet.create({
  floatingContainerStyle: {
    height: 250,
    zIndex: 99999,
    borderRadius: 20,
    position: 'relative',
  },
  linearGradientStyle: {
    zIndex: 99,
    position: 'absolute',
    height: 250,
  },
  logoContainerStyle: {
    zIndex: 999,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
  },
});
export default FloatingContainer;
