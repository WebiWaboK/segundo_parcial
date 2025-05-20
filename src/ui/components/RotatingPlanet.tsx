import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const SIZE = width * 0.6;

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const RotatingPlanet = () => {
  const rotation = useSharedValue(0);

  React.useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 8000,
        easing: Easing.linear,
      }),
      -1 // infinito
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <View style={styles.container}>
      <AnimatedSvg
        height={SIZE}
        width={SIZE}
        style={animatedStyle}
        viewBox="0 0 100 100"
      >
        {/* Planeta base */}
        <Circle cx="50" cy="50" r="40" fill="#3b82f6" />
        {/* Un pequeño "continente" o mancha */}
        <Circle cx="60" cy="40" r="10" fill="#10b981" />
      </AnimatedSvg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 40,
  },
});

export default RotatingPlanet;
