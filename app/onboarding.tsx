import { useRouter } from 'expo-router';
import Lottie from 'lottie-react-native';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import { setItem } from '../utils/storage';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
  const router = useRouter();

  const handleSkip = () => {
    // send to api user onboardedComplete skip
    router.replace('/home');
    setItem('onboarded', '1');
  };

  const handleDone = () => {
    // send to api user onboardedComplete true
    router.replace('/home');
    setItem('onboarded', '1');
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Onboarding
        containerStyles={{ paddingHorizontal: 15 }}
        onSkip={handleSkip}
        onDone={handleDone}
        DoneButtonComponent={doneButton}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <Lottie
                source={require('../assets/quiz.json')}
                style={styles.lottie}
                autoPlay
                loop
                resizeMode="contain"
              />
            ),
            title: 'Selamat Datang',
            subtitle: 'Di QuizPlayIO, kamu bisa belajar sambil main kuis seru!',
          },
          {
            backgroundColor: '#ffe4b5',
            image: (
              <Lottie
                source={require('../assets/add.json')}
                style={styles.lottie}
                autoPlay
                loop
                resizeMode="contain"
              />
            ),
            title: 'Bikin Kuismu',
            subtitle: 'Tulis istilah dan definisi sendiri, atau gunakan kuis yang sudah ada.',
          },
          {
            backgroundColor: '#b0e0e6',
            image: (
              <Lottie
                style={styles.lottie}
                source={require('../assets/play.json')}
                autoPlay
                loop
                resizeMode="contain"
              />
            ),
            title: 'Belajar Sambil Bermain',
            subtitle: 'Jawab kuis seperti main game, seru dan bikin kamu makin pinter! 🎮📚',
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lottie: {
    width: width * 0.8,
    height: height * 0.35,
    alignSelf: 'center',
    marginBottom: 20,
  },
  doneButton: {
    padding: 20,
  },
});
