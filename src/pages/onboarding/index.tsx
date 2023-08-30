import Center from '@/components/form/Center';
import FoodGradientButton from '@/components/form/FoodGradientButton';
import FoodText from '@/components/form/FoodText';
import {RootStackParamList} from '@/navigation/main';
import {colors} from '@/utils/colors';
import {font, normalize} from '@/utils/responsive';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageRequireSource,
  LayoutChangeEvent,
  ListRenderItem,
  StyleSheet,
  View,
} from 'react-native';

type OnboardingDataType = {
  title: string | React.ReactElement;
  content: string;
  image: ImageRequireSource;
};
type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const Onboarding: React.FC<Props> = ({navigation}) => {
  const [sliderSize, setSliderSize] = useState({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
  const dimension = Dimensions.get('window');
  const [currentOnboarding, setCurrentOnboarding] = useState<number>(0);
  const flatlistRef = useRef<FlatList>(null);

  const initialOnboardingData: OnboardingDataType[] = [
    {
      title: (
        <Center
          style={{
            alignItems: 'center',
            maxWidth: normalize(210),
          }}>
          <FoodText
            fontFamily={'Bold'}
            fontSize={font.xxxlarge}
            textInputStyle={{textAlign: 'center'}}>
            Find your Comfort Food here
          </FoodText>
        </Center>
      ),
      content:
        'Here You Can find a chef or dish for every taste and color. Enjoy!',
      image: require('@/assets/onboarding/onboarding-1.png'),
    },
    {
      title: (
        <Center
          style={{
            alignItems: 'center',
            maxWidth: normalize(350),
          }}>
          <FoodText
            fontFamily={'Bold'}
            fontSize={font.xxxlarge}
            textInputStyle={{textAlign: 'center'}}>
            Food Ninja is Where Your Comfort Food Lives
          </FoodText>
        </Center>
      ),
      content: 'Enjoy a fast and smooth food delivery at your doorstep',
      image: require('@/assets/onboarding/onboarding-2.png'),
    },
  ];

  const nextItem = async () => {
    if (currentOnboarding == 1) {
      navigation.navigate('Signup');
      try {
        await AsyncStorage.setItem('isOnboardingPassed', 'true');
      } catch (e) {
        console.log(e);
      }
      return;
    }
    setCurrentOnboarding(prev => (prev >= 1 ? 1 : prev + 1));
    flatlistRef.current?.scrollToIndex({
      index: currentOnboarding + 1,
      animated: true,
    });
  };

  const renderOnboardingItem: ListRenderItem<OnboardingDataType> = ({item}) => {
    return (
      <View style={[styles.renderItemContainer, {...sliderSize}]}>
        <Image
          source={item.image}
          resizeMethod="scale"
          style={{height: 380, maxHeight: 380}}
        />
        <View style={styles.renderItemTitleStyle}>{item.title}</View>
        <Center style={styles.renderItemContentContainerStyle}>
          <FoodText
            fontFamily={'Thin'}
            textInputStyle={{textAlign: 'center'}}
            fontSize={font.small}>
            {item.content}
          </FoodText>
        </Center>
      </View>
    );
  };

  const onLayout = (event: LayoutChangeEvent) => {
    const {width, height, x, y} = event.nativeEvent.layout;
    setSliderSize({width, height, x, y});
  };
  return (
    <View style={styles.areaContainer}>
      <FlatList
        ref={flatlistRef}
        contentContainerStyle={{flexGrow: 1}}
        data={initialOnboardingData}
        renderItem={renderOnboardingItem}
        horizontal
        onLayout={onLayout}
        initialNumToRender={1}
        initialScrollIndex={0}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      />
      <View
        style={[
          {
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'flex-end',
            zIndex: 999999,
            width: '100%',
            height: '100%',
            paddingBottom: normalize(30),
          },
        ]}>
        <FoodGradientButton
          containerStyle={[styles.nextButtonStyle]}
          colors={['#53E88B', '#15BE77']}
          activeOpacity={0.6}
          onPress={nextItem}>
          <FoodText fontFamily={'Bold'} color={'white'} fontSize={font.medium}>
            Next
          </FoodText>
        </FoodGradientButton>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  areaContainer: {
    position: 'relative',
    flex: 1,
    backgroundColor: 'red',
  },
  renderItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  renderItemTitleStyle: {
    marginVertical: normalize(20),
  },
  renderItemContentContainerStyle: {
    marginVertical: normalize(20),
    paddingHorizontal: normalize(64),
  },
  renderItemContentContainer: {
    width: normalize(160),
    height: normalize(60),
  },
  nextButtonStyle: {
    height: normalize(56),
    maxWidth: normalize(150),
    width: normalize(150),
    borderRadius: normalize(16),
  },
});
export default Onboarding;
