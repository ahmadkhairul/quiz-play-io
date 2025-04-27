import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
// import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { quizzes } from '~/presentation/data/quiz';

const isLoggedIn = false;

export default function HomeScreen() {
  const router = useRouter();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGoToQuiz = (id: string) => {
    router.push({
      pathname: '/quiz/preview/[id]',
      params: { id },
    });
  };

  const handleEditQuiz = (id: string) => {
    router.push({
      pathname: '/quiz/[id]', // change to /edit/[id]
      params: { id },
    });
  };

  const handleAddQuiz = () => {
    if (!isLoggedIn) {
      router.push('/login');
    }
    // else {
    //   router.push('/add');
    // }
  };

  const handleUserIconPress = () => {
    if (!isLoggedIn) {
      router.push('/login');
    }
    // else {
    //   router.push('/profile');
    // }
  };

  return (
    <View style={styles.container}>
      {/* User Icon */}
      <TouchableOpacity style={styles.userIcon} onPress={handleUserIconPress}>
        <Ionicons name="person-circle-outline" size={36} color="#333" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Daftar Kuis</Text>

        {/* List Quiz */}
        {quizzes.map((quiz) => (
          <View key={quiz.id} style={styles.quizCard}>
            <Text style={styles.quizTitle}>{quiz.title}</Text>
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.goButton} onPress={() => handleGoToQuiz(quiz.id)}>
                <Text style={styles.buttonText}>
                  <Ionicons name="arrow-forward-sharp" size={24} color="#fff" />
                </Text>
              </TouchableOpacity>
              {isLoggedIn && (
                <TouchableOpacity style={styles.editButton} onPress={() => handleEditQuiz(quiz.id)}>
                  <Text style={styles.buttonText}>
                    <Ionicons name="pencil" size={24} color="#fff" />
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}

        {/* Add Quiz Button */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddQuiz}>
          <Ionicons name="add-circle-outline" size={24} color="white" />
          <Text style={styles.addButtonText}>Tambah Kuis</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f8', paddingTop: 60 },
  content: { paddingHorizontal: 20, paddingBottom: 40 },
  userIcon: { position: 'absolute', top: 20, right: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#333' },
  quizCard: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  quizTitle: { fontSize: 20, fontWeight: '600' },
  buttonGroup: { flexDirection: 'row', gap: 10 },
  goButton: {
    backgroundColor: '#6c47ff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  editButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: { color: 'white', fontWeight: '600' },
  addButton: {
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: '#6c47ff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 8,
  },
  addButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
