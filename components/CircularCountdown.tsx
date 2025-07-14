import Colors from '@/constants/Colors';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const SIZE = 40;
const STROKE_WIDTH = 6;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const DURATION = 60;

interface CircularCountdownProps {
  revalidate: () => void;
}

const CircularCountdown = ({ revalidate }: CircularCountdownProps) => {
  const animated = useRef(new Animated.Value(0)).current;
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const intervalRef = useRef<number | null>(null);

  const startAnimation = () => {
    animated.setValue(0);
    Animated.timing(animated, {
      toValue: 1,
      duration: DURATION * 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    startAnimation();

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          revalidate();
          startAnimation();
          return DURATION;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const strokeDashoffset = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, CIRCUMFERENCE],
  });

  return (
    <View>
      <Svg width={SIZE} height={SIZE}>
        <Circle
          stroke="#eee"
          fill="none"
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
        />
        <AnimatedCircle
          stroke={Colors.light.primary}
          fill="none"
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={`${CIRCUMFERENCE}, ${CIRCUMFERENCE}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
        />
      </Svg>
    </View>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default CircularCountdown;
