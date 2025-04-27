import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useState, useRef } from 'react';
import { View, Animated, Text, ActivityIndicator, StyleSheet } from 'react-native';

const images = [require('../assets/icon-v1.png'), require('../assets/icon-v2.png')];

export default function SplashScreen() {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      // Step 1: Fade Out
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        // Step 2: Setelah fade out selesai, ganti gambar
        setIndex((prev) => (prev + 1) % images.length);

        // Step 3: Fade In
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }).start();
      });
    }, 1400); // Sedikit lebih lama karena tambah waktu transisi

    return () => clearInterval(interval);
  }, [fadeAnim]);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');

      setTimeout(() => {
        if (hasLaunched === null) {
          AsyncStorage.setItem('hasLaunched', 'true');
          router.replace('/onboarding');
        } else {
          router.replace('/home');
        }
      }, 3500); // Splash + 2-3 kali animasi
    };
    checkFirstLaunch();
  }, [router]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={images[index]}
        style={{ width: 200, height: 200, opacity: fadeAnim, borderRadius: 50 }}
      />
      <Text style={styles.logo}>QuizPlayIO</Text>
      <ActivityIndicator size="large" color="#6c47ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b0e0e6',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    margin: 20,
    color: '#333',
  },
});
