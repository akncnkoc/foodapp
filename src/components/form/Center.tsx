import { SafeAreaView, StyleSheet, View, ViewProps } from 'react-native';

type CenterProps = { safeArea?: boolean } & ViewProps;
const Center: React.FC<CenterProps> = (props) => {
  const { safeArea, ...centerProps } = props;
  return safeArea ? (
    <SafeAreaView {...centerProps} style={[styles.centerStyle, props.style]}>
      {props.children}
    </SafeAreaView>
  ) : (
    <View {...centerProps} style={[styles.centerStyle, props.style]}>
      {props.children}
    </View>
  );
};
const styles = StyleSheet.create({
  centerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex',
  },
});

export default Center;
