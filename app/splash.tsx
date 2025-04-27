import { useEffect, useState } from 'react';
import { View, Animated } from 'react-native';

const images = [require('../assets/icon-v1.png'), require('../assets/icon-v2.png')];

export default function SplashScreen() {
  const [index, setIndex] = useState(0);
  const fadeAnim = new Animated.Value(1);

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
      setIndex((prev) => (prev + 1) % images.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Animated.Image
        source={images[index]}
        style={{ width: 200, height: 200, opacity: fadeAnim }}
      />
    </View>
  );
}
