import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { quizzes } from '~/presentation/data/quiz';

export default function QuizScreenPreview() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const quizData = quizzes.find((item) => item.id === id);

  const handleGoToQuiz = () => {
    router.push({
      pathname: '/quiz/[id]',
      params: { id },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.summaryText}>Summary</Text>

        <Text style={styles.titleText}>{quizData?.title}</Text>
        <Text style={styles.descText}>{quizData?.description}</Text>

        <Text style={styles.titleText}>Istilah dan definisi</Text>
        <Text style={styles.descText}>
          Kamu diharapkan untuk menghafal istilah dan apa definisinya, pada games ini kamu akan
          diperintahkan untuk mengetik istilah yang cocok dengan definisi yang diberikan.
        </Text>
        {quizData?.questions.map((quiz, index) => {
          return (
            <View key={index} style={styles.termBox}>
              <Text style={styles.termText}>{quiz.term}</Text>
              <Text style={styles.definitionText}>{quiz.definition}</Text>
            </View>
          );
        })}
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleGoToQuiz}>
          <Text style={styles.nextButtonText}>Ya, Saya sudah mengerti</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f8', padding: 20 },
  topContainer: { flex: 1, justifyContent: 'flex-start' },
  titleText: { fontSize: 18, color: '#333' },
  descText: { fontSize: 16, color: '#333', marginBottom: 20 },
  termBox: {},
  termText: { fontSize: 14, color: '#333' },
  definitionText: { fontSize: 14, color: '#333', marginBottom: 10 },
  bottomContainer: { padding: 20 },
  summaryText: { fontSize: 20, color: '#333', textAlign: 'center', marginBottom: 20 },
  nextButton: {
    backgroundColor: '#6c47ff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
