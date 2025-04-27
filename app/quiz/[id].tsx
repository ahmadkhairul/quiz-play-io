import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
} from 'react-native';

import { quizzes } from '~/presentation/data/quiz';

const { height } = Dimensions.get('window');

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const { id } = useLocalSearchParams();

  const quizData = quizzes.find((item) => item.id === id)?.questions || [
    { term: 'text', definition: 'text' },
  ];

  const handleNext = () => {
    const correctAnswer = quizData[currentQuestion].term.toLowerCase().trim();
    const userAnswer = answer.toLowerCase().trim();

    if (correctAnswer === userAnswer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion === quizData.length - 1) {
      Alert.alert(
        'Selesai',
        `Jawaban benar: ${score + (correctAnswer === userAnswer ? 1 : 0)} dari ${quizData.length}`
      );
      setCurrentQuestion(0);
      setAnswer('');
      setScore(0);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setAnswer('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Bagian atas: istilah random animasi */}
      <View style={styles.topContainer}>
        {quizData.map((quiz, index) => {
          return (
            <View key={index} style={styles.termBox}>
              <Text style={styles.termText}>{quiz.term}</Text>
            </View>
          );
        })}
      </View>

      {/* Bagian tengah: soal definisi */}
      <View style={styles.middleContainer}>
        <Text style={styles.definitionText}>{quizData[currentQuestion].definition}</Text>
      </View>

      {/* Bagian bawah: input jawaban */}
      <View style={styles.bottomContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ketik istilah yang cocok..."
          value={answer}
          onChangeText={setAnswer}
        />
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {currentQuestion === quizData.length - 1 ? 'Submit' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f8', paddingTop: 40 },
  topContainer: {
    height: height * 0.35,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'scroll',
  },
  middleContainer: { flex: 1, justifyContent: 'center', paddingHorizontal: 20 },
  bottomContainer: { padding: 20 },
  termBox: {
    width: 120,
    height: 60,
    backgroundColor: '#6c47ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  termText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  definitionText: { fontSize: 20, color: '#333', textAlign: 'center' },
  input: {
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#6c47ff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
